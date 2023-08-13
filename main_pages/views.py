
from django.shortcuts import render, redirect
from .forms import ReviewForm
from .models import Product,Cart


def homescreen_view(request):
    return render(request, "home.html",{})

def About_view(request):
    return render(request, "AboutUs.html",{})

def Bundles_View(request):
    return render(request, "BundlesSection.html",{})

def Desert_view(request):
    return render(request, "DesertSection.html",{})

def Drinks_view(request):
    return render(request, "DrinksSection.html",{})

def Pasta_view(request):
    return render(request, "PastaSection.html",{})

def Pizza_view(request):
    return render(request, "PizzaSection.html",{})

def Popular_view(request):
    return render(request, "PopularSection.html",{})

def Salad_view(request):
    return render(request, "SaladSection.html",{})

def Sauce_view(request):
    return render(request, "SauceSection.html",{})

def Contact_view(request):
    return render(request, "ContactUs.html",{})

def review_view(request):
    if request.method == 'GET':
        form = ReviewForm(request.GET)
        if form.is_valid():
            form.save()
            return redirect('home')  
    else:
        form = ReviewForm()
    
    context = {'reviewform': form}
    return render(request, 'home.html', context)


def search_products(request):
    query = request.GET.get('text') 
    products = Product.objects.filter(Productname__icontains=query)
    
    context = {
        'products': products,
        'query': query
    }
    
    return render(request, 'search_results.html', context)


def featured_pizzas(request):
    query = request.GET.get('Pizzas') 
    Pizzaproducts = Product.objects.filter(productType__icontains=query)
    context = {
        'products1': Pizzaproducts,
        'query': query
    }
    return render(request, 'PizzaSection.html', context)