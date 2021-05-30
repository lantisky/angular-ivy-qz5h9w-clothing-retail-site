import { Component, OnInit } from '@angular/core';
import { CartItem, CartService, CartViewDisplay } from "ng-shopping-cart";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})

export class CheckOutPageComponent implements OnInit {
    display: CartViewDisplay = 'responsive-table';
    tax = 0;
    shipping = 0;
    showImages = true;
    useCustom = false;

    resultsCollapsed = false;

  constructor(public cartService: CartService<CartItem>) {}

    ngOnInit(): void {
        this.tax = this.cartService.getTaxRate();
        this.shipping = this.cartService.getShipping();
    }
    setTaxRate() {
        const val = parseFloat(this.tax.toString());
        this.cartService.setTaxRate(val);
        this.tax = this.cartService.getTaxRate();
    }

    setShipping() {
        const val = parseFloat(this.shipping.toString());
        this.cartService.setShipping(val);
        this.shipping = this.cartService.getShipping();
    }
}
