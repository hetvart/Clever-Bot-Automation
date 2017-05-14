module.exports = {
   before : function(browser) {
     console.log('Setting up...');
     console.log('Runnning at', browser.options.desiredCapabilities.browserName, 'browser...');
   },

   after : function(browser) {
     console.log('Closing down...');
   },
   'Create an account': function (browser) { // Step1: register new account within cleverbot.com
     var mainPage = browser.page.mainPage();
     	mainPage.navigate()
     		.assert.title('Cleverbot.com - a clever bot - speak to an AI with some Actual Intelligence?')
     		.openSignInMenu()
     		.expect.section('@signInForm').to.be.visible;

     var signUpSection = mainPage.section.signUpForm

       signUpSection.setValue('@username', 'maroqalasqae')
     		.setPassword('123456789')
     		.setValue('@fullName', 'fafarxaaeq')
     		.setValue('@email', 'john@namaaqge.com')
     		.setValue('@terms_select', 'yes')
     		.signUp()
     		.assert.containsText('@registrationSuccessfulMessage', 'We have sent you an email.')
   },

   'Verify the created account': function(browser){ // Step2: verify the created account

   	//TODO: parse email box here to get a verification link and pass it to mainPage.navigate()

   	var mainPage = browser.page.mainPage()
   	  mainPage.navigate('http://www.cleverbot.com/mz/sv/212478/b11dae16b563') // here we use verification link from another gmail account to show the verification process
   		  .assert.title('Cleverbot.com - a clever bot - speak to an AI with some Actual Intelligence?')
   		  .expect.section('@signInForm').to.be.visible;

   	  mainPage.section.signInForm
   		  .assert.containsText('@successfulAccountVerificationMessage', 'account verified, please sign in')
   },

   'Login with the created account': function(browser) { // Step3: login to cleverbot with the created account
   	browser.page.mainPage().section.signInForm
   	    .signIn('mirra008', '12345678')

	   var loggedInPage = browser.page.loggedInPage()
       loggedInPage.openUserMenu()
    
     var profileSection = loggedInPage.section.profile

   profileSection.assert.value('@fullName', 'Mirran')
   },

   'Chating with bot': function(browser) { // Step4: sending several messages to the bot
   	var page = browser.page.loggedInPage();
     page.navigate().expect.section('@bot').to.be.visible;

     var bot_section = page.section.bot

     var messages = ['hello', 'how are you?', 'good luck!'];
     var expectedMessagesCount = messages.length * 2
     bot_section.saySeveralMessages(messages)
       .checkMessagesCount(expectedMessagesCount)

     console.log(process.env.__NIGHTWATCH_ENV)
   	browser.end()
   }
};