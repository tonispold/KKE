import openpyxl

wb = openpyxl.load_workbook(r"homework1-1 (anwers).xlsx")
sheet = wb["Conditional formatting"]

form = sheet.conditional_formatting

for row in form:
    print(row.cells, row.cfRule)

wb.close()