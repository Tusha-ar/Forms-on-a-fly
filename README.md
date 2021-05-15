# Forms On A Fly

A simple react component that takes in an configuration object and a submit function as props to spit out a bootstraped dynamic form with validation and stuff using react hook form under the hood. There are some cool things which the library supports.

# Installation

`npm i form-on-a-fly`

# Setup

## Create an object

You can pass a css prop in any component for custom styles

```
const content = [
    {
      sectionTitle: "Title 1",
      items: [
        [
          {
            label: "First name",
            name: "first_name",
            type: "text",
            defaultValue: "",
            placeholder: "First Name",
            css:{
              color: "red"
            },
            validation: {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            },
          },
          {
            label: "Last Name",
            name: "last_name",
            type: "text",
            defaultValue: "",
            placeholder: "Last Name",
            validation: {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            },
          },
        ],
        [
          {
            label: "Email",
            name: "email",
            type: "text",
            defaultValue: "",
            placeholder: "email@email.com",
            validation: {
              required: true,
              pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i,
            },
          },
          {
            label: "Phone Number",
            name: "phone_number",
            type: "text",
            defaultValue: "",
            placeholder: "Phone Number",
            validation: {
              required: true,
              pattern: /[0-9]{10}/i,
            },
          },
        ],
        [
          {
            type: "line",
          },
          {
            type: "heading",
            text: "Alert!!",
          },
          {
            type: "paragraph",
            text: "We are doing a small survey",
          },
        ],
        [
          {
            label: "Gender",
            name: "gender",
            validation: {
              required: true,
            },
            type: "radio",
            options: [
              {
                label: "Male",
                value: "gender_male",
                showOnSelect: [
                  [
                    {
                      label: "Do You Cook",
                      name: "cook",
                      type: "radio",
                      options: [
                        {
                          label: "yes",
                          value: "yes",
                          showOnSelect: [
                            [
                              {
                                type: "paragraph",
                                text: "Good....",
                              },
                            ],
                          ],
                        },
                        {
                          label: "No",
                          value: "no",
                          showOnSelect: [
                            [
                              {
                                type: "paragraph",
                                text: "Go learn then",
                              },
                            ],
                          ],
                        },
                      ],
                    },
                  ],
                ],
              },
              {
                label: "Female",
                value: "gender_female",
                showOnSelect: [
                  [
                    {
                      label: "Do you drive good",
                      name: "drive_good",
                      type: "radio",
                      options: [
                        {
                          label: "yes",
                          value: "yes",
                          showOnSelect: [
                            [
                              {
                                type: "paragraph",
                                text: "I don't believe that",
                              },
                            ],
                          ],
                        },
                        {
                          label: "No",
                          value: "no",
                          showOnSelect: [
                            [
                              {
                                type: "paragraph",
                                text: "Honest ah...",
                              },
                            ],
                          ],
                        },
                      ],
                    },
                  ],
                ],
              },
            ],
          },
        ],
        [
          {
            type: "textarea",
            name: "message",
            label: "Any Message",
          },
        ],
        [
          {
            label: "You eat",
            name: "eat",
            validation: {
              required: true,
            },
            type: "checkbox",
            options: [
              {
                label: "Vegies",
                value: "eat_vegies",
              },
              {
                label: "Fruits",
                value: "eat_fruits",
              },
            ],
          },
          {
            label: "Attact some doc",
            name: "doc",
            type: "file",
            defaultValue: "",
            validation: {
              required: true,
            },
          },
        ],
      ],
    },
  ];
```

## Create a submit function

```
function submitFunction(data) {
  console.log(data)
}
```

## Import and use the component

```
import FormOnAFly from 'FormOnAFly';


const App = () => {
  return <FormOnAFly onSubmit={submitFunction}>{content}</FormOnAFly>;
}
```

## Sample output

![sample form](https://github.com/Tusha-ar/Forms-on-a-fly/blob/master/Images/sample.jpg)


## Rows and columns configuration in object

```
const content = {
  {
    sectionTitle: "Title 1", //title for section 1
    items: [
      [ //row 1
        { //col 1
          label: "First name",
          name: "first_name",
          type: "text",
          defaultValue: "",
          placeholder: "First Name",
          css:{
            color: "red"
          },
          validation: {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          },
        },
        { //col2
          label: "Last Name",
          name: "last_name",
          type: "text",
          defaultValue: "",
          placeholder: "Last Name",
          validation: {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          },
        },
      ],
      [ //row 2
        { //col 1
            .......goes on........
        }
      ]
  },
  {
    sectionTitle: "section 2",

    ......goes on......
  }
}
```

## Text Input setup (use type text for number and email with proper validation)

```
{ //col 1
  label: "First name",
  name: "first_name",
  type: "text",
  defaultValue: "",
  placeholder: "First Name",
  css:{
    color: "red"
  },
  validation: {
    required: true,
    maxLength: 20,
    pattern: /^[A-Za-z]+$/i,
  },
},
```


## Radio setup

```
{
  label: "Gender",
  name: "gender",
  validation: {
    required: true,
  },
  type: "radio",
  options: [
    {
      label: "Male",
      value: "gender_male",
      showOnSelect: [
        [
          {
            label: "Do You Cook",
            name: "cook",
            type: "radio",
            options: [
              {
                label: "yes",
                value: "yes",
                showOnSelect: [
                  [
                    {
                      type: "paragraph",
                      text: "Good....",
                    },
                  ],
                ],
              },
              {
                label: "No",
                value: "no",
                showOnSelect: [
                  [
                    {
                      type: "paragraph",
                      text: "Go learn then",
                    },
                  ],
                ],
              },
            ],
          },
        ],
      ],
    },
    {
      label: "Female",
      value: "gender_female",
      showOnSelect: [
        [
          {
            label: "Do you drive good",
            name: "drive_good",
            type: "radio",
            options: [
              {
                label: "yes",
                value: "yes",
                showOnSelect: [
                  [
                    {
                      type: "paragraph",
                      text: "I don't believe that",
                    },
                  ],
                ],
              },
              {
                label: "No",
                value: "no",
                showOnSelect: [
                  [
                    {
                      type: "paragraph",
                      text: "Honest ah...",
                    },
                  ],
                ],
              },
            ],
          },
        ],
      ],
    },
  ],
}
```

showOnSelect is for rendering anything if the radio button is selcted i.e. just conditional rendering


## Checkbox setup

```
{
  label: "You eat",
  name: "eat",
  validation: {
    required: true,
  },
  type: "checkbox",
  options: [
    {
      label: "Vegies",
      value: "eat_vegies",
    },
    {
      label: "Fruits",
      value: "eat_fruits",
    },
  ],
}
```

checkbox also accepts conditional rendering prop i.e. showOnSelect 


## File input setup

```
{
  label: "Attact some doc",
  name: "doc",
  type: "file",
  defaultValue: "",
  validation: {
    required: true,
  },
},
```

## Textarea input setup 

```
[
  {
    type: "textarea",
    name: "message",
    label: "Any Message",
  },
],
```


## Paragraph, heading and horizontal line setup

```
[
  {
    type: "line",
  },
  {
    type: "heading",
    text: "Alert!!",
  },
  {
    type: "paragraph",
    text: "We are doing a small survey",
  },
],
```