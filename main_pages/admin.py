from django.contrib import admin
from .models import Cart, Review,Inquiry,Product

admin.site.register(Cart)
admin.site.register(Review)
admin.site.register(Inquiry)


class productSearch(admin.ModelAdmin):
	list_display = ('Productname','price','productType', 'description', 'productLoc','productID')
	search_fields = ('Productname','productType',)
	readonly_fields=('productLoc', 'productID')

	filter_horizontal = ()
	list_filter = ()
	fieldsets = ()


admin.site.register(Product, productSearch)
