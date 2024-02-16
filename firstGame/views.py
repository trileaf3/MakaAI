# Create your views here.
from django.shortcuts import render

def game_view(request):
    return render(request, 'firstGame/index.html')  # Render your game template
