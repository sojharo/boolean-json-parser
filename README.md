# Evaluates Boolean Expression given in JSON Format

Note: Assuming in our language && has precedence over ||.

_Given Example_

```
("a" == "a") && !(1 == 2)

Equivalent JSON:

{ "&&": [{ "==": ["a", "a"] }, { "!": { "==": [1, 2] } }] }
```

_Example 1:_

```
!(true == false) && (1 == 1) && (2 == 4)

Equivalent JSON:

{ "&&": [{ "!": { "==": [true, false] } }, { "==": [1, 1] }, { "==": [2, 4] }] }
```

_Example 2:_

```
!(true == false) && (1 == 1) || (2 == 4)

Equivalent JSON:

{
  "||": [
    { "&&": [{ "!": { "==": [true, false] } }, { "==": [1, 1] }] },
    { "==": [2, 4] }
  ]
}
```

_Example 3:_

```
!(true == false) || (1 == 1) || (2 == 4)

Equivalent JSON:

{ "||": [
    { "!": { "==": [true, false] } },
    { "==": [1, 1] },
    { "==": [2, 4] }
    ]
}
```

_Example 4:_

```
(true == false) || (1 == 1) && !(2 == 4)

Equivalent JSON:

{
  "||": [
    { "&&": [{ "==": [1, 1] }, { "!": { "==": [2, 4] } }] },
    { "==": [true, false] }
  ]
}
```

_Example 5:_

```
!(2 == 4)

Equivalent JSON:

{ "!": { "==": [2, 4] } }
```

_Example 6:_

```
(2 == 4) && (true == true)

Equivalent JSON:

{ "&&": [{ "==": [2, 4] }, {"==": [true, true]}] }
```

_Example 7:_

```
(2 == 4) || (true == true)

Equivalent JSON:

{ "||": [{ "==": [2, 4] }, {"==": [true, true]}] }
```

_COMPLEX EXAMPLES_

_Example 8:_ Operand is also equality boolean expression

```
(2 == 4) && (true == (7 == 8))

Equivalent JSON:

{ "&&": [{ "==": [2, 4] }, { "==": [true, { "==": [7, 8] }] }] }
```

_Example 9:_ Operand is also logical && expression of two operands (nested &&)

```
(2 == 2) && (true == ((7 == 8) && (true == false)))

Equivalent JSON:

{
  "&&": [
    { "==": [2, 2] },
    { "==": [true, { "&&": [{ "==": [7, 8] }, { "==": [true, false] }] }] }
  ]
}
```
