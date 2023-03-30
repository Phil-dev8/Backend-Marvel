# Backend-Marvel

This is the back-end of my Marvel website ----> **https://marvel-phil-dev8.netlify.app/**

## The differents routes

I use a Marvel API with **5 differents route** for this project : 3 for comics, 2 for characters. You can see these in the folder **/routes**.

Route : /comics  
Method : **GET**  
What it does? : _Get the list of comics ( **+ 1500 !**)_

Route : /comic/:comicId  
Method : **GET**  
What it does? : _Get all informations of specific comic_

Route : /comics/:characterId  
Method : **GET**  
What it does? : _Get a list of comics containing a specific character_

Route : /characters  
Method : **GET**  
What it does? : _Get a list of characters ( **+ 14K !**)_

Route : /character/:characterId  
Method : **GET**  
What it does? : _Get a the infos of a specific character_

Moreover of these routes, I create 2 additional in /routes/user.js for signup and login to your account on the website.  
You will ask me : Why I am going to create an account on your Marvel website ??  
With an account, you will be able to **add favorites characters and comics** !

I hope you will enjoy to search your favorites Marvel characters and comics on this little project ! :D
