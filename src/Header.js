import React from 'react';
import './Header.css'

function Header() {
  return (
    <div className="header">
        <div class="navbar">
            <div class="nav-logo border">
                <div class="logo"></div>
            </div>

            <div class="nav-address border">
                <p class="add-first">Deliver to</p>
                <div class="add-icon">
                    <i class="fa-solid fa-location-dot"></i>
                    <p class="add-sec">India</p>
                </div>
            </div>

            <div class="nav-search">
                <select class="seach-select">
                    <option>All</option>
                    <option value="artscarfts">Arts & Crafts</option>
                    <option value="automotive">Automotive</option>
                    <option value="baby">Baby</option>
                    <option value="books">Books</option>
                    <option value="computers">Computers</option>
                    <option value="deals">Deals</option>
                    <option value="digitalmusic">Digital Music</option>
                    <option value="electronics">Electronics</option>
                    <option value="girlsfasion">Girl's Fasion</option>
                    <option value="healthhousehold">Health & Household</option>
                    <option value="homekitchen">Home & Kitchen</option>
                    <option value="industrialscientific">Industrial & Scientific</option>
                    <option value="kindlestore">Kindle Store</option>
                    <option value="luggage">Luggage</option>
                    <option value="mensfasion">Men's Fasion</option>
                    <option value="moviestv">Movies & TV</option>
                    <option value="Musiccd">Music & CD</option>
                </select>
                <input type="text" placeholder="Search Amazon" class="search-input"/>
                <div class="search-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
            </div>

            <div class="nav-signin border">
                <p><span>Hello, sign in</span></p>
                <p class="nav-second">Account & Lists</p>
            </div>

            <div class="nav-return border">
                <p><span>Returns</span></p>
                <p class="nav-second">& Orders</p>
            </div>

            <div class="nav-cart border">
                <i class="fa-solid fa-cart-shopping"></i>
                Cart
            </div>
        </div>

        <div class="panel">
            <div class="panel-all">
                <i class="fa-solid fa-bars"></i>
                All
            </div>
            <div class="panel-ops ">
                <p class="border">Today's Deals</p>
                <p class="border">Customer Service</p>
                <p class="border">Registry</p>
                <p class="border">Gift Cards</p>
                <p class="border">Sell</p>
            </div>
            <div class="panel-deals border">
                Shops deals in Electronics
            </div>
        </div>
    </div>
  )
}

export default Header