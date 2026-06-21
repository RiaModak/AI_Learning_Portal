from django import forms
from .models import Test, Question
from .models import TestSourceDocument

class TestForm(forms.ModelForm):
    class Meta:
        model = Test
        fields = ['course', 'title', 'description', 'due_date']

class QuestionForm(forms.ModelForm):
    class Meta:
        model = Question
        fields = ['question_text', 'option1', 'option2', 'option3', 'option4', 'correct_option']

class TestSourceDocumentForm(forms.ModelForm):
    class Meta:
        model = TestSourceDocument
        fields = ['course', 'title', 'uploaded_file']

from django.contrib.auth.models import User, Group

class UserEditForm(forms.ModelForm):

    role = forms.ChoiceField(
        choices=[
            ('Admin', 'Admin'),
            ('Teacher', 'Teacher'),
            ('Student', 'Student'),
        ]
    )

    new_password = forms.CharField(
        required=False,
        widget=forms.PasswordInput(
            attrs={'placeholder': 'Leave blank to keep current password'}
        )
    )

    class Meta:
        model = User
        fields = [
            'username',
            'first_name',
            'last_name',
            'email',
            'is_active',
        ]

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        if self.instance.pk:
            group = self.instance.groups.first()

            if group:
                self.fields['role'].initial = group.name

from django.contrib.auth.models import User

class UserCreateForm(forms.ModelForm):

    role = forms.ChoiceField(
        choices=[
            ('Admin', 'Admin'),
            ('Teacher', 'Teacher'),
            ('Student', 'Student'),
        ]
    )

    password = forms.CharField(
        widget=forms.PasswordInput()
    )

    confirm_password = forms.CharField(
        widget=forms.PasswordInput()
    )

    class Meta:
        model = User
        fields = [
            'username',
            'first_name',
            'last_name',
            'email',
            'is_active',
        ]

    def clean(self):
        cleaned_data = super().clean()

        password = cleaned_data.get('password')
        confirm_password = cleaned_data.get('confirm_password')

        if password != confirm_password:
            raise forms.ValidationError(
                "Passwords do not match."
            )

        return cleaned_data