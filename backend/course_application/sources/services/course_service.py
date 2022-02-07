import random

from ..serializers.course_serializers import CourseSerializer
from ..serializers.partition_serializer import PartitionSerializer, PartitionTaskSerializer
from ..models.user_course import UserCourse
from ..models.course import Course
from ..models.partition import Partition
from ..models.partition_task import PartitionTask


class CourseService:
    def append_partitions(self, course_id, data):
        partitions = Partition.objects.filter(course_id=course_id).order_by('index')
        serializer = PartitionSerializer(partitions, many=True)
        data['partitions'] = serializer.data
        for item in data['partitions']:
            if item['including_task']:
                task = PartitionTask.objects.get(partition_id=item['partition_id'])
                serializer_task = PartitionTaskSerializer(task)
                item['task'] = serializer_task.data
        return data

    def list(self, user_id):
        courses_ids = UserCourse.objects.filter(user_id=user_id).values_list('course_id')
        courses = Course.objects.filter(course_id__in=courses_ids)
        serializer = CourseSerializer(courses, many=True)
        data = serializer.data
        for item in data:
            liked = UserCourse.objects.get(user_id=user_id, course_id=item['course_id']).liked
            item['toggle'] = liked
        return data

    def retrieve(self, course_id):
        course = Course.objects.get(course_id=course_id)
        serializer = CourseSerializer(course)
        data = serializer.data
        data = self.append_partitions(course_id, data)
        return data

    def toggle(self, user_id, course_id):
        course = UserCourse.objects.get(user_id=user_id, course_id=course_id)
        course.liked = False if course.liked else True
        course.save()
        return {"message": "OK"}

    def amount(self, user_id):
        courses = self.list(user_id)
        return {"courses": len(courses)}

    def random(self, user_id):
        user_desks = UserCourse.objects.filter(
            user_id=user_id
        )
        if len(user_desks) == 0:
            return {'course_id': None}
        return {'course_id': random.choice(user_desks).course_id}

course_service = CourseService()
