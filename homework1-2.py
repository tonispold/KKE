from functions import create_zip, list_from_txt, file_check, finish, end_of_testing, logical_functions, date_functions, lookup_functions, conditional_function, script_start
from openpyxl import load_workbook
from warnings import filterwarnings

filterwarnings("ignore")
name = "homework1_2"
script_start()
create_zip(name)
count = 1
file_list = list_from_txt("uploaded-files-info.txt")
for i in file_list:
    this_file = file_check(i)

    wb = load_workbook(this_file)

    logical_functions(this_file, wb)
    date_functions(this_file, wb)
    lookup_functions(this_file, wb)
    conditional_function(wb)

    end_of_testing(wb, this_file, count, file_list, name)
    count = count + 1
finish()
