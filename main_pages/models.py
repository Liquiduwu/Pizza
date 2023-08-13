
from django.db import models

class Cart(models.Model):
    product = models.ForeignKey('Product', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.product.Productname} - ${self.product.price} -${self.product.productID}"
    
class Inquiry(models.Model):
    inquiry_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    email = models.EmailField()
    subject = models.CharField(max_length=50)
    message = models.CharField(max_length=100)

    def __str__(self):
        return self.subject
    
class Review(models.Model):
    user_first_name = models.CharField(max_length=50)
    user_last_name = models.CharField(max_length=50)
    user_email = models.EmailField()
    review_id = models.AutoField(primary_key=True)
    message = models.CharField(max_length=100)

    def __str__(self):
        return self.message

class Product(models.Model):
    Productname = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    description = models.CharField(max_length=100)
    productType = models.CharField(max_length=50,default='N/A')
    productLoc = models.CharField(max_length=100, default='N/A')
    productID = models.PositiveIntegerField()
    productIMG = models.ImageField(null=True, blank=True)

    def __str__(self):
        return str(self.productID)