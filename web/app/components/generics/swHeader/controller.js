module.exports = [
  '$rootScope',
  '$scope',
  '$state',
  'loginService',
  function YmHeaderController($rootScope, $scope, $state, loginService) {
    var self = this;
    var desktop_width = 975;
    var tablet_width = 751;

    self.userName = $rootScope.loggedUser.loggedUser.userName;
    self.nickName = $rootScope.loggedUser.loggedUser.nickName;

    self.doLogout = function() {
      loginService.logout();
      $state.go('auth');
    }

    self.toogleMenuProfileOpen = function() {
      self.menuProfileOpen = !self.menuProfileOpen;
    }

    self.toogleNotification = function() {
      self.notificationOpen = !self.notificationOpen;
    }

    self.toogleEmail = function() {
      self.emailOpen = !self.emailOpen;
    }

    self.toogleFriend = function() {
      self.friendOpen = !self.friendOpen;
    }

    self.toogleSubMenu = function() {
  		if ($('body').hasClass('submenu')) {
  			$('body').removeClass('submenu');
  		} else {
  			$('body').addClass('submenu');
  		}
    }

    self.toggleNavbar = function(direction){
			var opposite = (direction=="left")? "right":"left";
			$('body').removeClass('remove-navbar');
			$('body').removeClass('fullscreen');

			// if nav-direction is hiding
			if ($('body').hasClass('nav-'+direction+'-hide')) {
				$('body').removeClass('nav-'+direction+'-hide');
//				navToggle(direction, "show");
				// if there is nav-opposite AND (nav-direction start with hiding OR smaller screen)
				if (!$('body').hasClass('no-nav-'+opposite) && !$('body').hasClass('nav-'+opposite+'-hide') && ($('body').hasClass('nav-'+direction+'-start-hide') || $(window).width() < desktop_width) ){
//					navToggle(opposite, "hide");
					$('body').addClass('nav-'+opposite+'-hide');
				}
			}	else
			// if nav-opposite is hiding
			if ($('body').hasClass('nav-'+opposite+'-hide') && $(window).width()>= desktop_width ){
				$('body').removeClass('nav-'+opposite+'-hide');
				$('body').addClass('nav-'+direction+'-hide');
			}  else {
				$('body').addClass('nav-'+direction+'-hide');
			}

      resizeAffixPanel()
		}

    function resizeAffixPanel(){
      $('.sidebar-affix .panel').css('width',($('.vd_content-section').innerWidth()-114)/3+'px');
      if ($(window).width() <= tablet_width)	{
        $('.sidebar-affix .panel').removeAttr('style');
      }
    }

    $rootScope.$on("documentClicked", function(inner, target) {

      if (!$(target[0]).is("#top-menu-profile") && !$(target[0]).parents("#top-menu-profile").length > 0) {
        $scope.$applyAsync(function() {
          self.menuProfileOpen = false;
        });
      }

      if (!$(target[0]).is("#top-menu-notification") && !$(target[0]).parents("#top-menu-notification").length > 0) {
        $scope.$applyAsync(function() {
          self.notificationOpen = false;
        });
      }

      if (!$(target[0]).is("#top-menu-email") && !$(target[0]).parents("#top-menu-email").length > 0) {
        $scope.$applyAsync(function() {
          self.emailOpen = false;
        });
      }

      if (!$(target[0]).is("#top-menu-friends") && !$(target[0]).parents("#top-menu-friends").length > 0) {
        $scope.$applyAsync(function() {
          self.friendOpen = false;
        });
      }
		});

  }
];
