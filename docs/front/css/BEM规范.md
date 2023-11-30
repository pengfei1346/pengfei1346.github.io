---
isTimeLine: true
title: BEM规范
date: 2021-11-21
tags:
- css
---

# BEM规范

## BEM规范

BEM代表 块（block）、元素（element）、修饰符（modifier），三个部分结合使用，生成一套具有唯一性的class命名规范，起到样式隔离，避免css样式污染的作用

如el-input , el-input__inner, el-input--mini

**定义block**  
作用：给组件添加统一的el-前缀，通过@content将include{}中传递过来的内容导入到指定位置

```scss
@mixin b($block) {
  $B: $namespace+'-'+$block !global; // 使用el-拼接组件名
  .#{$B} {
    @content;
  }
}
```

block示例

```scss
// 编译前
@include b(button) {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
}

// 编译后
.el-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
}
```

**定义element**

作用：

1）通过__连接符将父级选择器和传入的子元素拼接起来  
2）通过hitAllSpecialNestRule函数判断父级选择器（$selector: &），是否包含-- .is- ：这三种字符  
3）如果父级选择器包含这几种字符，输出父级选择器包含子元素的嵌套关系

```scss
@mixin e($element) {
  $E: $element !global;
  $selector: &;
  $currentSelector: "";
  @each $unit in $element { // $element传入的值可以单个，也可以是列表
    $currentSelector: #{$currentSelector + "." + $B + $element-separator + $unit + ","};
  }

  @if hitAllSpecialNestRule($selector) {
    @at-root {
      #{$selector} {
        #{$currentSelector} {
          @content;
        }
      }
    }
  } @else {
    @at-root {
      #{$currentSelector} {
        @content;
      }
    }
  }
}
```

element示例

```scss
// 编译前
@include b(message-box) {
  color: blue;
  @include m(center) {
    padding-bottom: 30px;
    @include e(header) {
      padding-top: 30px;
    }
  }
}

// 编译后
.el-message-box {
  color: blue;
}

.el-message-box--center {
  padding-bottom: 30px;
}

.el-message-box--center .el-message-box__header {
  padding-top: 30px;
}
```

**定义modifier(修饰符)**

通过--连接符将父级选择器和传入的修饰符拼接起来

```scss
@mixin m($modifier) {
  $selector: &;
  $currentSelector: "";
  @each $unit in $modifier {
    $currentSelector: #{$currentSelector + & + $modifier-separator + $unit + ","};
  }

  @at-root {
    #{$currentSelector} {
      @content;
    }
  }
}
```

modifier示例

```scss
/*// 编译前*/
@include b(button) {
  display: inline-block;
  @include m(primary) {
    color: blue;
  }
}

/*// 编译后*/
.el-button {
  display: inline-block;
}

.el-button--primary {
  color: blue;
}
```




















