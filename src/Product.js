import React from 'react';
import "./Product.css";

function Product({id, title, image, price, rating}) {
  return (
    <div>
    
    <div>
        <div className="shop-section">
        <div className="box">
            <div className="box-content" href="https://google.com">
                <p>{title}</p>
                <p className="product_price"> <small>INR</small> <strong>{price}</strong></p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => (
                    <p><i class="fa-solid fa-star"></i></p>
                   ))}
                </div>
                
                <div className="box-img1" >{image}</div>
                <button>Add to basket</button>
                
            </div>
        </div>
        <div className="box">
        <div className="box-content" href="https://google.com">
                <p>{title}</p>
                <p className="product_price"> <small>INR</small> <strong>{price}</strong></p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => (
                    <p><i class="fa-solid fa-star"></i></p>
                   ))}
                </div>
                <div className="box-img2" ></div>
                <button>Add to basket</button>

            </div>
        </div>
        <div className="box">
        <div className="box-content" href="https://google.com">
                <p>Best Chair</p>
                <p className="product_price"> <small>INR</small> <strong>1390</strong></p>
                <div className="product_rating">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>                
                </div>
                <div className="box-img3" ></div>
                <button>Add to basket</button>

            </div>
        </div>
        <div className="box">
        <div className="box-content" href="https://google.com">
                <p>OnePlus Nord N30 5G | Unlocked Dual-SIM</p>
                <p className="product_price"> <small>INR</small> <strong>14340</strong></p>
                <div className="product_rating">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>                
                </div>
                <div className="box-img4" ></div>
                <button>Add to basket</button>

            </div>
        </div>

        {/* <div className="box">
        <div className="box-content" href="https://google.com">
                <p>Make up kit new trending</p>
                <p className="product_price"> <small>INR</small> <strong>3299</strong></p>
                <div className="product_rating">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>                
                </div>
                <div className="box-img5" ></div>
                <button>Add to basket</button>

            </div>
        </div> */}
        {/* <div className="box">
        <div className="box-content" href="https://google.com">
                <p>Pet food best for health</p>
                <p className="product_price"> <small>INR</small> <strong>1230</strong></p>
                <div className="product_rating">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>                
                </div>
                <div className="box-img6" ></div>
                <button>Add to basket</button>

            </div>
        </div> */}
        {/* <div className="box">
        <div className="box-content" href="https://google.com">
                <p>Baby safe rubber toy's</p>
                <p className="product_price"> <small>INR</small> <strong>2300</strong></p>
                <div className="product_rating">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>                
                </div>
                <div className="box-img7" ></div>
                <button>Add to basket</button>

            </div>
        </div> */}
        {/* <div className="box">
        <div className="box-content" href="https://google.com">
                <p>Kurties for girls</p>
                <p className="product_price"> <small>INR</small> <strong>1300</strong></p>
                <div className="product_rating">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>                
                </div>
                <div className="box-img8" ></div>
                <button>Add to basket</button>

            </div>
        </div> */}

        
    </div>
    </div>
    </div>
  )
}

export default Product