// importing other stuff, utility functions for:
// working with supabase:
import { checkAuth, signOutUser } from './fetch-utils.js';
// pure rendering (data --> DOM):

/*  "boiler plate" auth code */
// checking if we have a user! (will redirect to auth if not):
// can optionally return the user:
checkAuth();
// const user = checkAuth();

// sign out link:
const signOutLink = document.getElementById('sign-out-link');
signOutLink.addEventListener('click', signOutUser);
/* end "boiler plate auth code" */

// grab needed DOM elements on page:
// const chilisForm = document.getElementById('chilis-form');
// const chilisNameInput = document.getElementById('chilis-name');
// const chilisFileUpload = document.getElementById('chilis-file-upload');
// const chilisImage = document.getElementById('chilis-image');
// const chilisRatingTextarea = document.getElementById('chilis-rating-textarea');
// const addCommentButton = document.getElementById('add-chilis-comment');
// const imageContainer = document.getElementById('image-container');
// local state:

// display functions:

// events:
