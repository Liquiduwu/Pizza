"""
URL configuration for pizzaonlinestore project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from account.views import (registration_view,logout_view,login_view,account_view)
from main_pages.views import (homescreen_view, Contact_view, Salad_view, Sauce_view,Bundles_View,About_view,Drinks_view,Desert_view,Pasta_view,Pizza_view,Popular_view)
from django.conf.urls.static import static
from django.conf import settings
from main_pages.views import search_products


urlpatterns = [
    path("admin/", admin.site.urls),
    path('',homescreen_view, name = "homepage" ),
    path("home/",homescreen_view, name = "homepage" ),
    path("ContactUs/",Contact_view, name = "contact" ),
    path("AboutUs/",About_view, name = "about" ),
    path("PizzaSection/",Pizza_view, name = "pizza" ),
    path("SauceSection/",Sauce_view, name = "sauce" ),
    path("SaladSection/",Salad_view, name = "salad" ),
    path("DrinksSection/",Drinks_view, name = "drinks" ),
    path("BundlesSection/",Bundles_View, name = "bundles" ),
    path("PopularSection/",Popular_view, name = "popular" ),
    path("DesertSection/",Desert_view, name = "desert" ),
    path("PastaSection/",Pasta_view, name = "pasta" ),
    path('login/', login_view, name="login"),
    path('logout/', logout_view, name="logout"),
    path('register/', registration_view, name="register"),
    path('search/', search_products, name='search_products'),
    path('account/', account_view, name='account'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root = settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)