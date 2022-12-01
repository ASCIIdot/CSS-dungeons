# Data storage

There are three main segments to this:

* Where the website itself is stored
* How I will store all the information for the tilemaps/hints/levels.
* Storing inputs.

I have made the choice to **not** use databases or anything that stores a users' information; I did contemplate creating a leaderboard or storing progress to the client browser, but decided against it when realising my skills are not quite at that level to self-teach in the time frame we have.&#x20;

The website itself will be hosted on Firebase. It is a subpage of my domain who's main page is still a work in progress:

{% embed url="https://devdot.me/cssDungeons/cssDungeons.html" %}
The hosted instance of the website.
{% endembed %}

It is hosted on a third party server dedicated to hosting websites for free, which makes it applicable to this task. As I do not need any of their features targeted towards businesses and professional sites, it was a good choice.

In terms of the storing the information; Initially I was planning on just breaking it up into multiple JavaScript files, and keel everything local, but I have since decided to implement JSON, as OOP will be needed, and the magnitude of information will be needed to be organized separately from the functions running them.&#x20;

An example of this is in the Hint system outlined in the progression system. While a few instantiations could have the data within the file, once I go beyond a certain point it will become incredibly difficult to maintain the code and add new instances. JSON allows me to keep things manageable and neat, and easier to add multiple instances.&#x20;

All inputs will be temporarily stored. It will not be retained on reloading the page, or moving to a different level. It would be ideal if it was, but for the reasons mentioned in the first paragraph I will be ignoring this possibility for the time being. If I had more time, it would be something I would like to have done.&#x20;
