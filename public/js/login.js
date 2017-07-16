/**
 * 如果要打算有进度条的话, 可以参考
 * https://github.com/rstacruz/nprogress/
 * https://kimmobrunfeldt.github.io/progressbar.js/
 */

(function() {
  const keymap = {
    ENTER: 13
  };

  function on(el, event, handler, opt) {
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

  const username = document.getElementById('username');
  const password = document.getElementById('password');

  const step2 = document.getElementById('step-2');

  username.focus();

  on(username, 'keydown', function(e) {
    if (e.keyCode === keymap.ENTER) {
      step2.style.display = 'inline';
      password.focus();
    }
  });

  on(password, 'keydown', function(e) {
    if (e.keyCode === keymap.ENTER) {
      http
        .post('/login', {
          username: username.value,
          password: password.value
        })
        .then(function(res) {
          if (res.success) {
            window.location.href = res.redirect;
          }
        });
    }
  });
})();
