var pageCommands = {
	openUserMenu: function() {
    return this.waitForElementVisible('@user_menu', 1000)
    	.click('@user_menu')
	}
};

var botCommands = {
	saySeveralMessages: function(messages) {
		for (var i = 0; i < messages.length; i++) {
		res = this.waitForElementVisible('@input_message', 1000)
				.setValue('@input_message', messages[i])
				.submitForm('@submit')
				.waitForElementNotPresent('@thinker', 10000)
		}
		return res
	},
	checkMessagesCount: function(exp_count) {
		this.api.elements('css selector', '#conversationcontainer > p[id^=line] > span[class^=bot]:not(:empty) , span[class^=user]:not(:empty)', function(result){
			this.assert.equal(result.value.length, exp_count);
		});
	}
};

module.exports = {
	url: function() {
	  return this.api.launchUrl;
  	},
	commands: [pageCommands],
	elements: {
		user_menu: {
			selector: '#cbsocialsigninup'
		},
		conversationsMenu: {
			selector: '#cbsocialconversationsmenu'
		}
	},
	sections: {
		profile: {
			selector: 'form[onsubmit*=saveprofile]',
			elements: {
				accountStatusMessage: {
					selector: '#cbsocialmessagesaveprofile'
				},
				fullName: {
					selector: '#cbsocialprofilefullname'
				} 
			}
		},
		bot: {
			commands: [botCommands],
			selector: '#conversationcontainer',
			elements: {
				input_message: {
					selector: 'input[name=stimulus]'
				},
				submit: {
					selector: 'form#avatarform'
				},
				thinker: {
					selector: 'form.inprogress'
				}
			}
		}
	}
}