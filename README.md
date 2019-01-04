# image-changer
Changes images of a page


Image changer:
This is just a fun extension. This helps you to change all the images on a page and replace it with a specific image I have in the folder.
How I made it:
1)	First I made a “manifest.json” file.
2)	Then I made the “background.js” file which tells the browser that when the button is clicked then it should send a message to “content.js” file.
3)	So when the “content.js” file receives message from “background.js” file it reads all images from the page and sets its URL to the one with which I want to swap image.
Screen shots:
Before clicking:


![Screenshot](screenshot1.png)


 
After clicking:


![Screenshot](screenshot2.png)
 
 
 
