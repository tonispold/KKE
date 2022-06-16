from functions import create_zip, list_from_txt, validation_functions, sum_count, text_functions, \
    file_check, finish, end_of_testing, script_start
from openpyxl import load_workbook
from warnings import filterwarnings

filterwarnings("ignore")
name = "homework1_1"
script_start()
create_zip(name)
count = 1
file_list = list_from_txt("uploaded-files-info.txt")
for i in file_list:
    this_file = file_check(i)

    wb = load_workbook(this_file)

    validation_functions(wb)
    sum_count(this_file, wb)
    text_functions(this_file, wb)

    end_of_testing(wb, this_file, count, file_list, name)
    count = count + 1
finish()
