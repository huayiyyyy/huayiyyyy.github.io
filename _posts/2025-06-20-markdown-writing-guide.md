---
layout: post
title: "Markdown 写作速查"
date: 2025-06-20
tags: [教程, 工具]
---

这是一篇示例文章，展示博客支持的常用 Markdown 语法。可以直接删掉。

## 文字样式

**粗体**、*斜体*、`行内代码`、~~删除线~~，以及[链接](https://markdownguide.org)。

## 代码块

支持语法高亮：

```python
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a

print(fibonacci(10))  # 55
```

## 列表

1. 有序列表项一
2. 有序列表项二

- 无序列表项
- 另一项

## 数学公式

行内公式 $E = mc^2$，以及独立公式：

$$
\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}
$$

## 引用与表格

> 这是一段引用。

| 方法 | 准确率 | 参数量 |
|------|--------|--------|
| Baseline | 85.2% | 25M |
| Ours | **90.1%** | 25M |
