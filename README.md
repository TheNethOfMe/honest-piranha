# Honest Piranha

This is a landing page I've created in the MERN stack for my YouTube videos and podcasts. I created this to solve several problems I see when trying to create a personal "brand" for online entertainment.

1. Because online entertainers may need to utilize multiple services (in my case, YouTube for video and Anchor for podcasts) it can be nice to have one place to group everything together.
1. Platforms don't always let you display your content the way you would like to. By creating my own site and embedding players from these platforms, I have a lot more control over the way my projects are presented.
1. The signal to noise ratio in platform comment sections can be heavily skewed toward the noise, particularly when platforms don't present any barrier to entry. On my platform, there is a sign-up process to leave comments to dissuade people from leaving unproductive or toxic comments. However, users do not need to sign-up or log in to view or listen to the content.
1. This platform features a comment curating system that requires comments be approved before they are displayed. This prevents hate-speech and other undesirable content from appearing on my platform.

Thanks for checking this out. If you want to know more about my site as it exists, complete with screenshots, [check out that documentation here](./honpron_docs). If you just want to know more about the tech behind it and some pointers for how you could adapt this for your own uses, keep reading!

## Tools used

As mentioned above, this project is built on the MERN stack (MongoDB, Express, React, and Node) and uses NPM for it's dependancies. The backend uses Mongoose to create db schemas and bcrypt, passport, and passport-jwt to handle authentication.

The front-end was built using "create-react-app". I also used Redux to help with state management, axios to query the database, and node-sass to compile the sass files into a compressed css file.

## How to use

If you want to adapt this project for your own use, you'll want to remove the files in Models and create your own models. I recommend using Mongoose which is what my models are built with. You'll also want to create your own routes in the routes folder.

You can use the authentication strategy I did, or replace these with other dependancies for your authentication needs. Remember to run "npm install" to install the dependancies before trying to run the server.

Once you've updated your models and routes (don't forget to update them in the server file as well) and linked this to your own database (create your keys in the config folder) you can run "npm start" to run the server.

You could always delete the client folder entirely and build your own front-end from scratch if you know how. I recommend using "create-react-app" to make this really quick and easy.

Otherwise, you'll likely need to gut most of the contents of the sub-folders in ./client/src (actions, components, reducers, and styles in particular), and update the App.js file with your routes. I've setup the front-end to compile the sass files in App.js, but you'll need to have the node-sass dependancy for it to work (which you'll have if you run "npm install" from the client folder as it is now).

You might want to think about keeping the contents of the routers folder in ./client/src/components. I set these up to redirect users based on their user status. Any users that are logged in should be able to see sites that go through the "PrivateRoute" but not the "AdminRoute" for example. It will depend on what your needs are and your authentication strategy. For example, my site differentiates between users and administartors. If your site doesn't require admin-level users, you can leave that out.

## To Do

Features I want to add to this site in the near future:

1. Likes - Allow users to like videos, podcasts, etc. and view a list of their liked entries.
1. Other Info - That link doesn't work right now. Eventually, I want that to link to a FAQ, and an index or sitemap.
1. Search - Allow users to search for entries by game title.
1. Series Management - Allow admin to delete or update series titles from the dashboard, no messing with the code required.
1. Menu Management - Allow admin to update what appears in the menu on the main page without having to change it in the code.
1. Blog - I want to be able to add blogs as entries eventually as well.

Note: This is NOT a request for collaboration on this. While I really appreciate the offer, this is a labor of love for me that I want to work on myself. You're welcome to fork this and add other features for yourself, of course.

## Credits

If you have any other questions, I'd recommend checking out the [documentation for "create-react-app"](https://facebook.github.io/create-react-app/docs/getting-started).

If you're interested in creating your own full-stack MERN application, but are new to this sort of thing, I highly recommend [Brad Traversy's YouTube channel](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA). He also has links to some of his Udemy courses which were an enormous help for me when I was just getting started. (Note: I am not affiliated with Brad in anyway, I just wanted to give him a shout out.)
