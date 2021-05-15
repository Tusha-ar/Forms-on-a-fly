import React from "react";
import { storiesOf } from "@storybook/react";

import { FormOnAFly } from "../components/FormOnAFly";

const stories = storiesOf("App Test", module);

stories.add("FormOnAFly", () => {
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

  function submitFunction(data) {
    console.log(data);
  }
  return <FormOnAFly onSubmit={submitFunction}>{content}</FormOnAFly>;
});
