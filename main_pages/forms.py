from django import forms
from .models import Review

class ReviewForm(forms.ModelForm): 
    user_first_name = forms.CharField( 
        label='First Name', 
        widget=forms.TextInput(attrs={'placeholder': 'Enter your First name', 'required': True}) 
    ) 
    user_last_name = forms.CharField( 
        label='Last Name', 
        widget=forms.TextInput(attrs={'placeholder': 'Enter your Last name', 'required': True}) 
    ) 
    user_email = forms.EmailField( 
        label='Email', 
        widget=forms.EmailInput(attrs={'placeholder': 'Enter your email', 'required': True}) 
    ) 
    message = forms.CharField( 
        label='Review', 
        widget=forms.Textarea(attrs={'placeholder': 'Enter your message', 'required': True, 'rows': 4}) 
    ) 
    class Meta: 
        model = Review 
        fields = ['user_first_name', 'user_last_name', 'user_email', 'message']