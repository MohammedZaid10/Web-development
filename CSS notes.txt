Go through all code again and search for links in every code

Go through documentation of codewithharry
Lesson 14:

Intro to CSS:

    a. div is a selector in css and whatever declarations inside div is used the style will get applied to it

=============================================================

Lesson 15:

Inline CSS:

Internal CSS:

External CSS:

=============================================================

selector:

    /* Element selector */
        div {
            background-color: green;
        }

    /* Class elector*/
        .yellow {
            background-color: yellow;
        }

    /* Id selector*/
        #red {
            color: red
        }

    /* Child selector - should be directly child of parent selector */
        div>p {
            color: violet
        }

    /* Descendent selector - can be any child of parent selector, declare without space between parent and child selector */
        div p {
            color: violet
        }

    /* Universal selector */
        * {
            margin: 0;
            padding: 0;
        }
    
    /* Psuedo selector */
        a. a:visited
        b. a:link - unvisited
        c. a:active
        d. a.hover
        e. p:first-child
    </style>

===============================================================================

Lesson 18: CSS box model

Multiple classes can be given to same Element
box-sizing: border-box; - used for giving height or width only to margin and border and not to padding

Conecpt: Margin collapse: When there are two margins overlapping then the biggest of two margins will be taken

===============================================================================

Lesson 19: Fonts, Text and color

Fonts falback Conecept : Font-family
Font-style : italics
Link to know different font families: <!-- https://codepen.io/web-dot-dev/pen/yLojraG -->
Link to know different names of colors: /* https://codepen.io/web-dot-dev/pen/ZELGraM */
Hex color code
read code to revisit all concepts

===============================================================================

Lesson 21: CSS Specificity & cascading

The cascade algorithm has 4 distinct stages.

1. Position and order of appearance: the order in which your CSS rules appear
2. Specificity: an algorithm that determines which CSS selector has the strongest match
    The order of specificity is:
        Inline Style > ID Selector > Class or Attribute Selector > Element Selector > Universal Selector
3. Origin: the order in which CSS appears and where it comes from, whether that is a browser style, CSS from a browser extension, or your authored CSS
4. Importance: some CSS rules are weighted more heavily than others, especially with the !important rule type

Specificity Calculation
To calculate specificity, assign a value to each part of the selector:

Universal Selector: 0
Element selectors and pseudo-elements: 1
Class selectors, attribute selectors, and pseudo-classes: 10
ID selectors: 100
Inline styles: 1000

Quiz:
a.harryclass.rohan-class[href]:hover {
  color: red;
}

To calculate the specificity value of the selector a.harryclass.rohan-class[href]:hover, you can break down its components:
1 (element) + 20 (classes) + 10 (attribute) + 10 (pseudo-class) = 41

========================================================================================

Lesson 22 - CSS Sizing Units - px, rem, em, vh, vw, % & more 

read code properly

========================================================================================

Lesson 23: CSS Display Property

Display in css used for making a block element as inline element

the video also gave simple overview on flex box and how to justify it to centre and also explained grid functionality in flexbox

========================================================================================

Lesson 24: CSS shadows and outlines

Box shadows:
    SYNTAX : .div-element { box-shadow: 5px 5px 15px 5px #888888; }

text shadows:
    SYNTAX: .text-element { text-shadow: 2px 2px 4px #888888; }

Outlines:
    Similar as borders

    SYNTAX : .button-element:focus { outline: 2px solid blue; }
    
    Differences between Outlines and Borders:
    While both can visually appear similar, outlines differ from borders in a few ways:
        Position: Outlines don't take up space; they're drawn around the element, outside of any border.
        Offset: Using the outline-offset property, you can set the space between an outline and the edge or border of an element.
        Width: Borders can have varying widths on different sides, outlines have a uniform width. (border-radius)
        Rounded Corners: Borders can have rounded corners using border-radius, while outlines generally cannot

========================================================================================

Lesson 25 : Styling Lists using CSS

Read code as we have created nav bar for the first time as mostly lists are used inside a nav bar

and we have used many list-styles to design the list inside our nav bar

========================================================================================

Lesson 26 - CSS Overflow Property

Read code

========================================================================================

Lesson 26 - CSS Overflow Property

Read code to understand all CSS overflow property

========================================================================================

Lesson 28 - CSS Position property

Set position relative to remove the static position of any box

Navbor scrolling is shown in this video lecture and how it works using sticky, so navbar is continously visible once user scrolls through the page

Concepts :
Static Position
Relative Position : when a box is given as postion relative then it will overwrite its default posion property from static and then we can move the box around as we want
Z-index : to decide which box ill get stacked on top by giving 0 or 1
Absolute Position : will get positioned based on the first parent class that is positioned
Fixed Position : used to fix a box to its postion so taht even if we scroll, box is visible
Sticky Position : it will get sticky once we scroll after we reach it

Exception:
Question: How transform, filter or perpective properties can also make an element appear as positioned - Inerview question and how it inherits its properties from which class
Answer: even if there is no parent class or tag that is positioned, if any parent class or tag contains any transform, filter or perspective property then that class/box will get positioned to that parent class/tag which contains the transform/filter/perspective property

Read code again, read notes and practise code again watch video again to understand later

========================================================================================

Lesson 29 - Excersice 3 - creating a card using HTML and CSS

Done refer both my code and harry's code

========================================================================================

Lesson 30 - CSS variable

Read code properly with all comments
explore what other variables can be given

========================================================================================

Lesson 31 - CSS Media Queries

used for making sites responsive
SYNTAX:
@media not|only mediatype and (expressions) {
            CSS-Code;
            }

========================================================================================

Lesson 34 - CSS Float & Clear

never ever to be used. wasn used in old websites

========================================================================================

Lesson 35 - More on CSS Selectors

Read all codes for all different types of selectors 

========================================================================================

Lesson 38 - CSS flexbox

CSS Flex box:
    display: flex;
    justify-content: center;
    align-items: center;

Other concepts:
    1. Play with properties inside "justify-content" and "align-center"
    2. Play with flex-direction properties like row-reverse/column/column-reverse
    3. Flex direction:
        a. row
        b. Column
        c. Cross - Axis for (column ->)
        d. Main - Axis for (row ->)
        e. Cross start & Cross end
        f. Main start & Main end
        g. Corss-size
        h. Main-size
        See picture:    "C:\Users\zaidd\OneDrive\Desktop\Learning\Web development\Web-development\Lesson 38 - CSS flexbox\Screenshot 2025-05-05 175910.png"
    4. Flex-wrap : to handle overflow so that your boxes go in next line and dont overflow
    5. Align-content : to align items when we have multiple lines of items
    6. Flex-flow : row wrap
    7. gap : to give gap between each container
    8. Item property : 
        a. order 
        b. Flex grow - takes the amount of space as given, for example if 2 is given then it will take 2 times of the amount of spac
        c. Flex shrink - will shrink as specified, so if given 2, then as we responsive the device then by 2 times it will shrink
        d. Align self - one items property can be overwritten

========================================================================================

Lesson 39 - CSS grid

display: grid;
grid-template-columns: 120px 100px;

Part-1
    1. Grid line
    2. Grid Cell
    3. Grid Track - space in one entire column or space in one entire row
    4. Grid Area - space in selected Area
    5. Grid row and column properties
    6. Naming Grid lines

Part-2
    1. Grid template area - see syntax in grid2.html file
    2. fr unit - see syntax in grid3.html file
    3. gap property in grid - see syntax in grid3.html file :
        a. dont use padding in grid, use gap
        b. row gap and column gap
    4. justify-items and align-items in container property : to give justification and alignment to each items inside a container - see syntax in grid3.html file 
    5. justify-self and align-self : to give alignment and justification to each item - see syntax in grid3.html file
    6. repeat syntax with minmax - see syntax in grid3.html file
    7. Justify content and align contents : to justify the entire grid inside a container - see syntax in grid3.html file
    (Read all different properties inside justify and align like start, end, center, etc.)
    8. place-content: instead of using justify and align, we can use place and it will apply for both justofy and content

========================================================================================

Lesson 42 - CSS Transformers Masterclass

a. transform is used to hide navbars
b. different transform properties are:
    /* transform: rotate(40deg); */
    /* transform: rotate(0.5turn); */
    /* transform: rotateX(45deg);  */ /* rotates along x,y & z planes*/
    /* transform: scale(1.5);  */ /* scaleX or scaleY or scaleZ can be used and the box will become that many times larger so here it became 1.5 times larger*/
    /* transform: scale3d(); */
    /* transform: skew(5deg);  */ /* skewX or skewY but no skew on z-axis*/
    /* transform: translate(200%);  */
    /* translate is in percent and moves it along as per its size across different axis based on percentage porvided in x or y or z or 3d */
    /* transform: translateX(-100%) skew(5deg) translateY(-70%);  */ /* this is how to use multiple transformer properties together */
    transform: rotate(0.125deg);
    transform-origin: 0% 0%; /* somewhat advanced topic, is used when we want to rotate something, default value is 50% 50% */
c. Demo.html is created with syle.css by harry to help us visualize all the Transformers

========================================================================================

Lesson 45 - CSS Transition property

a. Syntax:
    transition-property: transform, background-color;
    transition-duration: 3s;
    transition-timing-function: ease-in-out;
    transition-delay: 1s; */
    transition: all 3s ease-in-out 1s; 
b. Instead of ease-in-out we can give anything else for timing function from inspect
c. Transition is used on the properties on which we want the transitions to happen, so for example if we want the transition to happen on 
d. read official documentations through md in vs code to understand all the use cases

========================================================================================

Lesson 46 - CSS Animations

a. Use animation for complex transitions and use Transition for simple transitions
b. Animations are created using "keyframe" keyword inside the stylesheet and animation is defined inside the box where the animation needs to be Done and the keyframe is given with animation-namke(any name/variable) and we have to specify where it starts "from" and ends "to"
c. Syntax:
    All things under animation: name duration timing-function delay iteration-count direction fill-mode;     
    animation-name: zaid;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-delay: 4s;
    animation-direction: reverse;
    animation-direction: alternate-reverse;
    animation-play-state: paused; /* gets paused at the exact position of box once enabled */
    animation-fill-mode: forwards;
    animation: name duration timing-function delay iteration-count direction fill-mode;
    animation: zaid 3s ease-in-out 4s infinite alternate-reverse forward;
    @keyframes zaid {
            from{
                background-color: aqua;
            }
            to{
                background-origin: yellow;
                transform: translate(100px);
            }
        }
d. read official documentations through md in vs code to understand all the use cases / properties under animation
e. use comma(,) to provide multiple animation property at the same time
    Syntax to provide multiple animations:
        animation: zaid 3s ease-in-out 3s 1,
                   zaid2 3s ease-in-out 3s 1;

========================================================================================

Lesson 49 - CSS Object-fit and Object-Position with Object-cover

a. Object-fit and Object-position are used to fill the image inside a box or container as required
    Syntax:
        object-position:top right;
        object-position: 10px 10px;
        object-position: 50% 50%;
        object-fit: cover;
        object-fit: fill;
        object-fit: scale-down;
        object-fit: contain;
b. CSS background property : 
    a. for making an image as a background image
    b. no need to give image inside the body of html
    c. background image is given as a url directly in the stylesheet
    d. Syntax:
        border: 2px solid black;
        background-image: url("https://www.adobe.com/acrobat/hub/media_173d13651460eb7e12c0ef4cf8410e0960a20f0ee.jpeg?width=750&format=jpeg&optimize=medium");
        background-position: center center;
        background-repeat: no-repeat;
        background-clip: padding-box;
        background-clip: content-box;
        background-clip: padding-box;

========================================================================================

Lesson 50 - CSS Filters

a. Just know about different filters which are used to add filters like opacity,blur,brightness,contrast,etc. to images
b. Syntax:
    filter: blur(5px);
    filter: brightness(150%) contrast(6.5);
    filter: contrast(40%);
    filter: grayscale(100%); /* gray scale is used to make image black-white */
    filter: sepia(100%); /* sepia is used to make an image look like old picture */
    filter: invert(75%);
    filter: opacity(25%); 

========================================================================================

Lesson 51 - excercise 8 solution from video 48

========================================================================================

Lesson 52 - Figma basics

========================================================================================

Lesson 53 -  Project Netflix clone

========================================================================================

