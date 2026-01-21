from rest_framework import serializers
from .models import Cart, CartItem
from products.models import Product
from products.serializers import ProductSerializer


class CartItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    subtotal = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)

    class Meta:
        model = CartItem
        fields = ('id', 'product', 'quantity', 'subtotal')


class CartSerializer(serializers.ModelSerializer):
    items = CartItemSerializer(many=True, read_only=True)
    total = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)

    class Meta:
        model = Cart
        fields = ('id', 'items', 'total', 'created_at', 'updated_at')


class CartItemCreateSerializer(serializers.Serializer):
    product_id = serializers.IntegerField()
    quantity = serializers.IntegerField(min_value=1)

    def validate_product_id(self, value):
        if not Product.objects.filter(id=value).exists():
            raise serializers.ValidationError(f"Product with id {value} does not exist.")
        return value


class CartCreateSerializer(serializers.Serializer):
    items = CartItemCreateSerializer(many=True)

    def validate_items(self, value):
        if not value:
            raise serializers.ValidationError("Cart must have at least one item.")
        return value

    def create(self, validated_data):
        items_data = validated_data['items']

        # Crear el carrito
        cart = Cart.objects.create()

        # Crear los items del carrito
        for item_data in items_data:
            product = Product.objects.get(id=item_data['product_id'])
            CartItem.objects.create(
                cart=cart,
                product=product,
                quantity=item_data['quantity']
            )

        return cart
