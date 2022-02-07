from enum import Enum

class CourseType(Enum):
    TEXT_PIC_TEXT = 'text_pic_text'
    TEXT_PIC = 'text_pic'
    PIC_TEXT = 'pic_text'
    TEXT_PIC_TASK = 'text_pic_task'
    TEXT_TASK = 'text_task'
    PIC_TASK = 'pic_task'

    @classmethod
    def choices(cls):
        return tuple((i.name, i.value) for i in cls)
