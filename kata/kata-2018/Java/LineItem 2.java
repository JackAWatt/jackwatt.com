import java.text.NumberFormat;

public class LineItem extends Product
{
    private Product product;
    private int quantity;
    private double total;

    public LineItem()
    {
        this.product = new Product();
        this.quantity = 0;
        this.total = 0;
    }

    public void setProduct(Product product)
    {
        this.product = product;
    }

    public Product getProduct()
    {
        return product;
    }

    public void setQuantity(int quantity)
    {
        this.quantity = quantity;
    }

    public int getQuantity()
    {
        return quantity;
    }

    public double getTotal()
    {
        this.calculateTotal();
        return total;
    }

    private void calculateTotal()
    {
        double price = product.getPrice();
        total = quantity * price;
    }

    public String getFormattedTotal()
    {
        NumberFormat currency = NumberFormat.getCurrencyInstance();
        return currency.format(this.getTotal());
    }
    
    @Override
    public boolean equals(Object object) {
        
      if (object  instanceof LineItem){   
          LineItem li = (LineItem)  object;
          if (product.equals(li.getProduct()) 
                  && quantity == li.getQuantity()){
              return true;
          }
          
          
      }    
        return false;
      
    }
    
}