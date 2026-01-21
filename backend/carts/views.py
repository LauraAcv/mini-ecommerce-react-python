from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Cart, CartItem
from .serializers import CartSerializer, CartCreateSerializer


class CartCreateView(APIView):
    """
    POST /api/cart/
    Crea un carrito con items. Espera: { "items": [{ "product_id": 1, "quantity": 2 }] }
    """
    def post(self, request):
        serializer = CartCreateSerializer(data=request.data)
        if serializer.is_valid():
            cart = serializer.save()
            response_serializer = CartSerializer(cart)
            return Response(response_serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
