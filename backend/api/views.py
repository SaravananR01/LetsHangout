from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
from .models import HangoutCode
import uuid

@api_view(['GET'])
def get_data(request):
    data = {"message": "Hello from Django!"}
    return Response(data)

@api_view(['POST'])
def generate_code(request):
    if request.method == "POST":
        name = request.data.get('name')  # Use request.data for DRF
        event_name = request.data.get('event_name')
        from_date = request.data.get('from_date')
        to_date = request.data.get('to_date')
        max_slot_time = request.data.get('max_slot_time')
        max_people = request.data.get('max_people')

        # Generate a unique code using UUID
        unique_code = str(uuid.uuid4())

        # Create a new HangoutCode instance
        hangout_code = HangoutCode(
            name=name,
            event_name=event_name,
            from_date=from_date,
            to_date=to_date,
            max_slot_time=max_slot_time,
            max_people=max_people,
            code=unique_code
        )
        
        try:
            hangout_code.save()  # Attempt to save the instance
            return JsonResponse({'code': unique_code}, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)  # Return error if save fails

    return JsonResponse({'error': 'Invalid request'}, status=400)