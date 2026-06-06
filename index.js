function checkPassword(password) {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score === 4) return "Strong";
  if (score === 3) return "Medium";
  return "Weak";
}

export default checkPassword;
