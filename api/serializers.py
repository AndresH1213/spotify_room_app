from django.db.models import fields
from rest_framework import serializers
from .models import Room

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id','code','host','guest_can_pause',
                    'votes_to_skip','created_at')

'''
    This serializer handle the post request, takes the
    data from the request and makes sure that is all
    valid and return to us in a Python format we can
    work with
'''
class CreateRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('guest_can_pause', 'votes_to_skip')

class UpdateRoomSerializer(serializers.ModelSerializer):
    code = serializers.CharField(validators=[])
    class Meta:
        model = Room
        fields = ('guest_can_pause', 'votes_to_skip', 'code')