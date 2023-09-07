 let dropdownHeader = document.querySelector('.profile-dropdown-header');
            let profileUserImage = document.querySelector('.profile-user-image');
            let profileUserImageInitials = document.querySelector('.profile-user-image-initials');
            let userName = document.querySelector('.user-name');
            let dropdownContent = document.querySelector('.profile-dropdown-content');

           dropdownHeader.addEventListener('click', () => {
              if (dropdownContent.classList.contains('show-dropdown')) {
                dropdownContent.classList.remove('show-dropdown'); // Remove the class to hide the dropdown
              } else {
                dropdownContent.classList.add('show-dropdown'); // Add the class to show the dropdown
              }
            });

            userName.addEventListener('click', (event) => {
              // Prevent the click event from propagating to dropdownHeader
              event.stopPropagation();
              dropdownContent.classList.add('show-dropdown');
            });
            
            //profileUserImageInitials and profileUserImage are
            //displayed conditionally, so they may be null and cause js to break
            if(profileUserImageInitials != null){
                
                profileUserImageInitials.addEventListener('click', (event)=> {
                     // Prevent the click event from propagating to dropdownHeader
                    event.stopPropagation();
                  dropdownContent.classList.toggle('show-dropdown');
                });
            
            }
            
            if(profileUserImage != null){
                
                profileUserImage.addEventListener('click', (event) => {
                  // Prevent the click event from propagating to dropdownHeader
                  event.stopPropagation();
                  dropdownContent.classList.add('show-dropdown');
                });
            
            }


            // Close the dropdown if the user clicks outside of it
            window.addEventListener('click', (event) => {
              if (!event.target.matches('.profile-dropdown-header') && !event.target.matches('.profile-dropdown-content')) {
                if (dropdownContent.classList.contains('show-dropdown')) {
                  dropdownContent.classList.remove('show-dropdown');
                }
              }
            });