// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

function validatePIN (pin) {
    for (i = 0; i < pin.length; i++) {
      if (pin.charCodeAt(i) < 48 || pin.charCodeAt(i) > 57) {
          return false;
          break;
        }
    }
        return pin.length == 4 || pin.length == 6
  }