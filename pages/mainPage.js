var signInCommands = {
  signIn: function(login, pwd) {
    this.setValue('@username', login)
    this.click('@fakePasswordField')
    this.setValue('@truePasswordField', pwd)
    return this.waitForElementVisible('@signInBtn', 1000)
      .click('@signInBtn')
  }
};

var signUpCommands = {
  setPassword: function(pwd) {
    this.click('@fakePasswordField')
    return this.setValue('@truePasswordField', pwd)
  },
  signUp: function() {    
    return this.waitForElementVisible('@signUpBtn', 1000)
      .click('@signUpBtn')
      .waitForElementVisible('@registrationSuccessfulMessage', 1000)
  }
};

var pageCommands = {
  openSignInMenu: function(){
    return this.waitForElementVisible('@signInMenu', 1000)
      .click('@signInMenu')
  }
};

module.exports = {
  url: function() { 
    return this.api.launchUrl;
  },
  commands: [pageCommands],
  elements: {
    signInMenu: {
      selector: '#cbsocialsigninup'
    }
  },
  sections: {
    signInForm: {
      commands: [signInCommands],
      selector: 'form[onsubmit*=signin]',
      elements: {
        username: {
          selector: 'input[name=username]'
        },
        fakePasswordField: {
          selector: 'input.passwordclear'
        },
        truePasswordField: {
          selector: 'input.passwordnormal'
        },
        signInBtn: {
          selector: 'input[type=submit]'
        },
        successfulAccountVerificationMessage: {
          selector: '#cbsocialmessagesignin',
        }
      }
    },
    signUpForm: {
      commands: [signUpCommands],
      selector: 'form[onsubmit*=signup]',
      elements: {
        username: {
          selector: 'input[name=username]'
        },
        fullName: {
          selector: 'input[name=fullname]'
        },
        email: {
          selector: 'input[name=email]',
        },
        fakePasswordField: {
          selector: 'input.passwordclear'
        },
        truePasswordField: {
          selector: 'input.passwordnormal'
        },
        terms_select: {
          selector: '#cbsocialregisterterms'
        },
        signUpBtn: {
          selector: 'input[type=submit]'
        },
        registrationSuccessfulMessage: {
          selector: '#cbsocialmessagesignup'
        }
      }
    }
  }
};