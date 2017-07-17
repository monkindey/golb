/**
 * 如果要打算有进度条的话, 可以参考
 * https://github.com/rstacruz/nprogress/
 * https://kimmobrunfeldt.github.io/progressbar.js/
 */

(function() {
  const keymap = {
    ENTER: 13
  };

  /**
   * @param {string} selector 
   */
  function q(selector) {
    if (selector[0] === '#') {
      return document.getElementById(selector.slice(1));
    } else {
      return document.querySelector(selector);
    }
  }

  function qa(selector) {
    return document.querySelectorAll(selector);
  }

  function arrayify(like) {
    return [].slice.call(like);
  }

  function on(el, event, handler, opt) {
    if (el.length) {
      return arrayify(el).forEach(function(element) {
        on(element, event, handler);
      });
    }
    el.addEventListener(event, handler, opt);
  }

  function ons(events) {
    Object.keys(events, function(el) {
      Object.keys(events[el], function(event) {
        on(el, event, events[el][event]);
      });
    });
  }

  function encodeParams(params) {
    return Object.keys(params)
      .map(function(key) {
        return `${key}=${params[key]}`;
      })
      .join('&');
  }

  const http = {
    post: function(url, params, config) {
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
        credentials: 'include',
        body: encodeParams(params)
      }).then(function(res) {
        if (res.ok) {
          return res.json();
        }
      });
    }
  };

  const flipper = q('.flipper-wrapper');
  const toggle = qa('.sh-icon-close');

  function sign(container) {
    return new Promise(function(resolve, reject) {
      const username = container.querySelector('.username');
      const password = container.querySelector('.password');
      const inputPwdStep = container.querySelector('.input-pwd-step');
      username.focus();

      on(username, 'keydown', function(e) {
        if (e.keyCode === keymap.ENTER) {
          inputPwdStep.style.display = 'inline';
          password.focus();
        }
      });

      on(password, 'keydown', function(e) {
        if (e.keyCode === keymap.ENTER) {
          resolve({
            username: username.value,
            password: password.value
          });
        }
      });
    });
  }

  sign(q('.sign'))
    .then(function(params) {
      return http.post('/signup', params);
    })
    .then(function(res) {
      if (res.success) {
        window.location.href = res.redirect;
      }
    });

  sign(q('.login'))
    .then(function(res) {
      return http.post('/login', res);
    })
    .then(function(res) {
      if (res.success) {
        window.location.href = res.redirect;
      }
    });

  on(toggle, 'click', function(e) {
    flipper.classList.toggle('flip');
  });
})();
