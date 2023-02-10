# ASG2

<h1>Idea for Our Website - Ong Chen Yu (S10243071) & Dynoh (S10242384) </h1>

## Contributions by each number

### Chen Yu
1. Whole of homepage
2. Responsiveness (e.g. Mobile Bottom Navigation, Sidebar in Mobile)
3. Fetch API from Fake Store API
 - Products for shop
 - Filter by category (Navigations)
 - Filter by product name (Search Bar)
 - Loading animation with scrolling
4. Lottie Animations

### Dynoh
1. Login Form (Fetch API from RestDB.io)
2. Shopping Cart
3. Likes


## Design Process

### External User's goal

This is intended for customers to go on the site to item they wish for because they do not want to go and physically find and purchase the products. In this day and age, life is fast-paced. This website provides convenience and entertainment, through some gamification features that will be mentioned below in <b>Potential Features to include</b>.

### Site Owner's goal
- Increasing user base and profits

### Files
[Wireframe](ID_ASG2_T05_Group7_Wireframe.xd)

## Potential features to include

- Customer loyalty program
  - Credits that can be used when purchasing products

- Account Login form
  - Receive membership privileges such as discount on merchandise upon completing the form
  - Admin : Update, delete info

## Technologies used
- [Platzi Fake Store API](https://fakeapi.platzi.com/)
  - Fetched API which has products that have been created. I accessed the corresponding values by downloading a JSON format extension to parse the raw data
  - It has over 200 products
- [JSON formatter extension](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en)
  - While accessing the raw data from Platzi Fake Store API, it is hard to visualise how the arrays in the database are created and formatted. Thus, I installed an extension that allows me to view the data in a Parsed format.
- [Lottie Animations](https://lottiefiles.com/search?q=loading&category=animations&animations-sort=popular)
  - Lottie files have been used in this project. It plays when page is being refreshed, or when more products are being fetched.
- [RestDB.io](https://restdb.io/)
  - There were attempts to use this application to validate between the new users, existing users, and admins.


## Testing
- Add to Shopping Cart and add to Likes
  - These features is partially finished. Due to time constraints, some attributes of the cart & likes was hardcoded. For example, the products in the shopping cart have been mostly hardcoded. It wasnt added through the  clicking on the cart or heart icon in the store. These are some features left unimplemented:
    1. Upon clicking on either one of the icons in each of the product container, it will be added into each of the Likes and the Cart Storage.
    2. The correct prices will be shown, and the addition of all the price of the products should tally up correctly.
    3. There will be a 'Remove' button to remove a product from Likes or Cart.
    4. The Check Out button will lead to another form for the user to make payments. The user can select the type of payment to be carried out.
    
    
- Login form 
  1. This feature is also partially finished. The front end of the login form has no issues, catering for new users and existing users. There is also data validation in the form. What was left unfinished is the backend. These are some features left unimplemented:
  2. There were difficulties with RestDB.io, thus the backend was not implemented.
  3. Upon successful submission of the Register form, the user's details, such as their Name, Email, and Password, will be recorded into the database.
  4. Upon successful submission of the Login form, the user's details will be compared with in the current database. If no such details are present in the database, the form will prompt "Invalid User! Please register an account if you have not done so." If any of the fields do not match what the database has, the user will not be signed in.  
  5. Admin: An admin is someone who can make changes on the website that will affect other users of WALNUT. There will be additional features where they will be able to acces whereby normal users would not be able to.

- Login Daily
  1. Clicking on the button on the homepage, it will lead to a gamification feature.
  2. Roulette Wheel: Every 24 hours, spin the wheel and get Walnut credits based on the number it lands on.
  3. User will be able to use walnut credits to get discounts off their orders. (E.g 100 walnuts for $1)

## Credits

### Content
- Some options been taken from [Carousell](https://www.carousell.sg/).
- References some of the Javascript codes for homepage have been taken from [Stack Overflow](https://stackoverflow.com/)
- References for some of the CSS codes have been taken from [W3Schools](https://www.w3schools.com/)
- [Lottie Animations](https://lottiefiles.com/search?q=loading&category=animations&animations-sort=popular)


### Media
- [Walnut Banner](https://pngtree.com/) is the first slide in the banner in homepage.
- [Valentines Day Banner](https://stock.adobe.com/sg) is the second slide in the banner in homepage.
- [Chinese New Year Banner](https://www.dreamstime.com/) is the last slide in the banner in homepage.
- In the footer, there is a [Payment Method Image.](https://help.zazzle.com/hc/en-us/articles/220639167-What-Payment-Methods-Are-Accepted-on-Zazzle-) in homepage.
- [Shrek](https://www.pngitem.com/pimgs/m/184-1845412_shrek-meme-png-transparent-png.png)
- [Form](https://www.pdffiller.com/preview/30/398/30398523.png) in shopping cart and likes.
- [Dog](https://i.pinimg.com/736x/e8/cc/7a/e8cc7ab3f5811fc222975f271245f661.jpg) picture in shopping cart and likes.


### Acknowledgements
- This website is inspired by [Shopee](https://shopee.sg/), [Lazada](https://www.lazada.sg/) and [Carousell](https://www.carousell.sg/).

