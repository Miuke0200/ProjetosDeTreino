    function generatePassword() {
      const length = document.getElementById('length').value;
      const strength = document.getElementById('strength').value;
      const includeSymbols = document.getElementById('includeSymbols').checked;
      const includeNumbers = document.getElementById('includeNumbers').checked;
      const passwordInput = document.getElementById('password-input');

      let chars = 'abcdefghijklmnopqrstuvwxyz';

      if (includeNumbers) {
        chars += '0123456789';
      }

      if (includeSymbols) {
        chars += '!@#$%^&*()-=_+[]{}|;:,.<>?';
      }

      let password = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
      }

      passwordInput.value = password;
    }

    function resetPassword() {
      document.getElementById('password-input').value = '';
    }