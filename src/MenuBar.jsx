import { MegaMenu } from "primereact/megamenu";

const MenuBar = () => {
  const items = [
    {
      label: "Why Equity Family Care",
      // icon: 'pi pi-fw pi-video',
      items: [
        [
          {
            label: "TBD",
            items: [{ label: "TBD" }, { label: "TBD" }],
          },
        ],
      ],
    },
    {
      label: "Life Toolkit",
      // icon: 'pi pi-fw pi-users',
      items: [
        [
          {
            label: "TBD",
            items: [{ label: "TBD" }, { label: "TBD" }],
          },
        ],
      ],
    },
    {
      label: "Our Solutions",
      // icon: 'pi pi-fw pi-calendar',
      items: [
        [
          {
            label: "Life Insurance",
            items: [
              { label: "Life Insurance 101", command: () => { window.location.href='/#/life-insurance'} },
              { label: "Term Life Insurance" },
              { label: "Whole Life Insurance" },
              {
                label: "Universal Life Insurance",
              },
            ],
          },
        ],
        [
          {
            label: "Affordable Final Expense",
            items: [
              { label: "Guaranteed Issue Life Insurance" },
              { label: "Final Expense" },
            ],
          },
        ],
        [
          {
            label: "Retirement Planning",
            items: [
              { label: "Annuities Overview" },
              { label: "Income Annuity" },
              { label: "Fixed Annuity" },
              { label: "Variable Annuity" },
              { label: "Fixed Index Annuity" },
            ],
          },
        ],
      ],
    },
    {
      label: "Mastering the Foundations",
      // icon: 'pi pi-fw pi-cog',
      items: [
        [
          {
            label: "TBD",
            items: [{ label: "TBD" }, { label: "TBD" }],
          },
        ]
      ],
    },
  ];

  return (
    <>
      <MegaMenu model={items} />
    </>
  );
};

export default MenuBar;
