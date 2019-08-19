Excel VBA

* 概要
- Excelを自動化する為プログラミング言語

* 初めて
```angular2html
Sub HelloWorld()
    'comment
    MsgBox _
    ("Hello")
End Sub
```

* セルに値を表示
```angular2html
Sub CellChange()
    Worksheets("Sheet1").Range("A1").Value = "hello"
    Range("A2").Value = "Hello 2"
    Cells(3, 1).Value = "hello 3"
    Cells(3, 1).Offset(1, 0).Value = "Hello4"
End Sub
```

* 複数のセルに値を表示
```angular2html
Sub CellChange()
    Range("A1", "B3").Value = "Hello"
    Range("A5:C7").Value = "Hello 2"
    Range("4:4").Value = "row 4"
    Range("C:C").Valu = "Column C"

    Cells.Clear
End Sub
```

* Withで命令
```angular2html
Sub WithTest()
    Range("A1").Value = "Hello"
    Range("A1").Font.Bold = True
    Range("A1").Font.Size = 16
    Range("A1").Interior.Color = vbRed
End Sub


Sub WithTest2()
    With Range("A2")
       .Value = "Hello"
        With .Font
           .Bold = True
           .Size = 16
        End With
       .Interior.Color = vbRed
    End With
End Sub

```

* セルの値を取得
```angular2html
Sub GetTest()
    MsgBox (Range("A1").Value)
    MsgBox (Range("A1").Font.Size)
End Sub
```

* メソッド
```angular2html
Sub MethodTest()
    'Range("B2").Clear
    'Range("B5").Delete shift:=xlShiftUp
    Worksheets.Add after:=Worksheets("Sheet2"), Count:=2
End Sub
```

* Excel VBAとマクロ
```angular2html
Sub Macro1()
'
' Macro1 Macro
'

'
    Range("A2").Select
    ActiveCell.FormulaR1C1 = "100"
    Range("A2").Select
End Sub
Sub Macro2()
'
' Macro2 Macro
'

'
    Range("B3").Select
End Sub

```

* データ型の変数

```angular2html

Sub VariableTest()
    Dim x As Integer
    x = 10
    'Range("A1").Value = x
    Debug.Print x

    Dim y As Double
    Dim s As String
    Dim d As Date
    Dim z As Variant
    Dim f As Boolean
    Dim r As Range

    y = 10.5
    s = "hello"
    d = "2012/02/03"
    f = True
    Set r = Range("A1")

    Debug.Print y / 3
    Debug.Print s & "world"
End Sub

```

* 配列
```angular2html
Sub VariableTest()
   Dim sales(2) As Integer
   sales(0) = 200
   sales(1) = 100
   sales(2) = 300
   Debug.Print sales(1)


    Dim sales2 As Variant
    sales2 = Array(200, 140, 300)
    Debug.Print sales2(2)
End Sub

```

* Ifで条件分岐
```angular2html
Sub IfTest()
    ' = < > <= >= <> and not or
    If Range("a1").Value > 80 Then
        Range("a2").Value = "OK"
    Else
        Range("a2").Value = "NG"
    End If
End Sub
```

* Selectで条件分岐
```angular2html

Sub SelectTest()
    Dim signal As String
    signal = Range("a1").Value

    Dim result As Range
    Set result = Range("a2")

    Select Case signal
    Case "red"
        result.Value = "STOP!"
    Case "green"
        result.Value = "Go!"
    Case "yellow"
        result.Value = "Caution!"
    Case Else
        result.Value = "N.A"
    End Select
End Sub
```

* While/Forでループ処理

```angular2html
Sub WhileTest()
    Dim i As Integer
    i = 1
    Do While i < 10
        Cells(i, 1).Value = i
        i = i + 1
    Loop
End Sub

Sub ForTest()
    Dim i As Integer
    i = 1
    For i = 1 To 9 Step 2
        Cells(i, 1).Value = i
    Next i
End Sub
```

* Eachで配列のループ処理

```angular2html
Sub EachTest()
    Dim names As Variant
    names = Array("itachi", "susuke", "banro")

    For Each Name In names
        Debug.Print Name
    Next Name

End Sub
```

* Callでプロシージャを呼び
```angular2html
Sub CallTest()
    Dim names As Variant
    names = Array("itachi", "ubuto", "ana")

    For Each name In names
        Call SayHi(name)
    Next name
End Sub

Sub SayHi(ByVal name As String)
   Debug.Print "Hi!," & name
End Sub
```

* Functionプロシージャ
```angular2html
Sub CallTest()
    Dim names As Variant
    names = Array("itachi", "ubuto", "ana")

    For Each name In names
        Debug.Print SayHi(name)
    Next name
End Sub

Function SayHi(ByVal name As String)
   SayHi = "Hi!," & name
End Function

```

* 成績表を処理

```angular2html
Sub FindLowTest()
    Dim i As Long
    Dim n As Long
    i = 2
    n = 0
    
    Do While Cells(i, 1).Value <> ""
        If Cells(i, 2).Value < 10 Then
            Cells(i, 2).Interior.Color = vbRed
            n = n + 1
        End If
        i = i + 1
    Loop

    MsgBox (n & "d_s_")
End Sub

```