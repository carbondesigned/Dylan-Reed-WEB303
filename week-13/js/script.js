$(() => {
  const validation = {
    username: false,
    password: false,
    confirmPassword: false,
    terms: false,
    country: false,
  };

  const $form = $('#register-form');
  const $username = $('#username');
  const $password = $('#password');
  const $confirmPassword = $('#password-confirm');
  const $terms = $('#terms');
  const $countries = $('#countries');
  const $submitBtn = $('#submit-btn');

  $form.on('submit', (e) => {
    e.preventDefault();

    const $welcome = $('<h2>');
    $welcome.text(`Welcome ${$username.val()} from ${$countries.val()}`);
    $form.append($welcome);
  });

  $username.on('input', () => {
    const username = $username.val();
    if (username) {
      validation.username = true;
    } else {
      validation.username = false;
    }
  });

  $password.on('input', () => {
    const password = $password.val();
    if (password.length >= 4) {
      validation.password = true;
    } else {
      validation.password = false;
    }
  });

  $confirmPassword.on('input', () => {
    const confirmPassword = $confirmPassword.val();
    const password = $password.val();
    if (confirmPassword === password) {
      validation.confirmPassword = true;
    } else {
      validation.confirmPassword = false;
    }
  });

  $terms.on('input', () => {
    const terms = $terms.val();
    if (terms) {
      validation.terms = true;
    } else {
      validation.terms = false;
    }
  });

  $countries.append('<option value="">Select Country</option>');
  countriesList.forEach((country) => {
    $countries.append(
      `<option value="${country.code}">${country.name}</option>`
    );
  });

  $countries.on('input', () => {
    const country = $countries.val();
    if (country) {
      validation.country = true;
    } else {
      validation.country = false;
    }
  });

  // if all validation is true, enable submit button
  $form.on('input', () => {
    if (
      validation.username &&
      validation.password &&
      validation.confirmPassword &&
      validation.terms &&
      validation.country
    ) {
      $submitBtn.removeAttr('disabled');
    } else {
      $submitBtn.attr('disabled', true);
    }
  });
});
