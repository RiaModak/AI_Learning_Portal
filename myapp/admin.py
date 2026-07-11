from django.contrib import admin
from .models import *

admin.site.register(Course)
admin.site.register(Assignment)
admin.site.register(StudentCourseEnrollment)
admin.site.register(StudentAssignmentSubmission)
admin.site.register(Test)
admin.site.register(Question)
admin.site.register(StudentAnswer)
admin.site.register(TestSourceDocument)
admin.site.register(AITestSubmission)
admin.site.register(AIStudentAnswer)