enum enumAriaRoles {
    /** A message with important, and usually time-sensitive, information. See related alertdialog and status. */
    alert = "alert",

    /** A type of dialog that contains an alert message, where initial focus goes to an element within the dialog. See related alert and dialog. */
    alertdialog = "alertdialog",

    /** A region declared as a web application, as opposed to a web document. */
    application = "application",

    /** A section of a page that consists of a composition that forms an independent part of a document, page, or site. */
    article = "article",

    /** A region that contains mostly site-oriented content, rather than page-specific content. */
    banner = "banner",

    /** An input that allows for user-triggered actions when clicked or pressed. See related link. */
    button = "button",

    /** A checkable input that has three possible values: true, false, or mixed. */
    checkbox = "checkbox",

    /** A cell containing header information for a column. */
    columnheader = "columnheader",

    /** A presentation of a select; usually similar to a textbox where users can type ahead to select an option, or type to enter arbitrary text as a new item in the list. See related listbox. */
    combobox = "combobox",

    /** A form of widget that performs an action but does not receive input data. */
    command = "command",

    /** A supporting section of the document, designed to be complementary to the main content at a similar level in the DOM hierarchy, but remains meaningful when separated from the main content. */
    complementary = "complementary",

    /** A widget that may contain navigable descendants or owned children. */
    composite = "composite",

    /** A large perceivable region that contains information about the parent document. */
    contentinfo = "contentinfo",

    /** A definition of a term or concept. */
    definition = "definition",

    /** A dialog is an application window that is designed to interrupt the current processing of an application in order to prompt the user to enter information or require a response. See related alertdialog. */
    dialog = "dialog",

    /** A list of references to members of a group, such as a static table of contents. */
    directory = "directory",

    /** A region containing related information that is declared as document content, as opposed to a web application. */
    document = "document",

    /** A landmark region that contains a collection of items and objects that, as a whole, combine to create a form. See related search. */
    form = "form",

    /** A grid is an interactive control which contains cells of tabular data arranged in rows and columns, like a table. */
    grid = "grid",

    /** A cell in a grid or treegrid. */
    gridcell = "gridcell",

    /** A set of user interface objects which are not intended to be included in a page summary or table of contents by assistive technologies. */
    group = "group",

    /** A heading for a section of the page. */
    heading = "heading",

    /** A container for a collection of elements that form an image. */
    img = "img",

    /** A generic type of widget that allows user input. */
    input = "input",

    /** A region of the page intended as a navigational landmark. */
    landmark = "landmark",

    /** An interactive reference to an internal or external resource that, when activated, causes the user agent to navigate to that resource. See related button. */
    link = "link",

    /** A group of non-interactive list items. See related listbox. */
    list = "list",

    /** A widget that allows the user to select one or more items from a list of choices. See related combobox and list. */
    listbox = "listbox",

    /** A single item in a list or directory. */
    listitem = "listitem",

    /** A type of live region where new information is added in meaningful order and old information may disappear. See related marquee. */
    log = "log",

    /** The main content of a document. */
    main = "main",

    /** A type of live region where non-essential information changes frequently. See related log. */
    marquee = "marquee",

    /** Content that represents a mathematical expression.  */
    math = "math",

    /** A type of widget that offers a list of choices to the user. */
    menu = "menu",

    /** A presentation of menu that usually remains visible and is usually presented horizontally. */
    menubar = "menubar",

    /** An option in a set of choices contained by a menu or menubar. */
    menuitem = "menuitem",

    /** A menuitem with a checkable state whose possible values are true, false, or mixed. */
    menuitemcheckbox = "menuitemcheckbox",

    /** A checkable menuitem in a set of elements with role menuitemradio, only one of which can be checked at a time. */
    menuitemradio = "menuitemradio",

    /** A collection of navigational elements (usually links) for navigating the document or related documents. */
    navigation = "navigation",

    /** A section whose content is parenthetic or ancillary to the main content of the resource. */
    note = "note",

    /** A selectable item in a select list. */
    option = "option",

    /** An element whose implicit native role semantics will not be mapped to the accessibility API. */
    presentation = "presentation",

    /** An element that displays the progress status for tasks that take a long time. */
    progressbar = "progressbar",

    /** A checkable input in a group of radio roles, only one of which can be checked at a time. */
    radio = "radio",

    /** A group of radio buttons. */
    radiogroup = "radiogroup",

    /** An input representing a range of values that can be set by the user. */
    range = "range",

    /** A large perceivable section of a web page or document, that is important enough to be included in a page summary or table of contents, for example, an area of the page containing live sporting event statistics. */
    region = "region",

    /** The base role from which all other roles in this taxonomy inherit. */
    roletype = "roletype",

    /** A row of cells in a grid. */
    row = "row",

    /** A group containing one or more row elements in a grid. */
    rowgroup = "rowgroup",

    /** A cell containing header information for a row in a grid. */
    rowheader = "rowheader",

    /** A graphical object that controls the scrolling of content within a viewing area, regardless of whether the content is fully displayed within the viewing area. */
    scrollbar = "scrollbar",

    /** A landmark region that contains a collection of items and objects that, as a whole, combine to create a search facility. See related form. */
    search = "search",

    /** A renderable structural containment unit in a document or application. */
    section = "section",

    /** A structure that labels or summarizes the topic of its related section. */
    sectionhead = "sectionhead",

    /** A form widget that allows the user to make selections from a set of choices. */
    select = "select",

    /** A divider that separates and distinguishes sections of content or groups of menuitems. */
    separator = "separator",

    /** A user input where the user selects a value from within a given range. */
    slider = "slider",

    /** A form of range that expects the user to select from among discrete choices. */
    spinbutton = "spinbutton",

    /** A container whose content is advisory information for the user but is not important enough to justify an alert, often but not necessarily presented as a status bar. See related alert. */
    status = "status",

    /** A document structural element. */
    structure = "structure",

    /** A grouping label providing a mechanism for selecting the tab content that is to be rendered to the user. */
    tab = "tab",

    /** A list of tab elements, which are references to tabpanel elements. */
    tablist = "tablist",

    /** A container for the resources associated with a tab, where each tab is contained in a tablist. */
    tabpanel = "tabpanel",

    /** Input that allows free-form text as its value. */
    textbox = "textbox",

    /** A type of live region containing a numerical counter which indicates an amount of elapsed time from a start point, or the time remaining until an end point. */
    timer = "timer",

    /** A collection of commonly used function buttons or controls represented in compact visual form. */
    toolbar = "toolbar",

    /** A contextual popup that displays a description for an element. */
    tooltip = "tooltip",

    /** A type of list that may contain sub-level nested groups that can be collapsed and expanded. */
    tree = "tree",

    /** A grid whose rows can be expanded and collapsed in the same manner as for a tree. */
    treegrid = "treegrid",

    /** An option item of a tree. This is an element within a tree that may be expanded or collapsed if it contains a sub-level group of treeitem elements. */
    treeitem = "treeitem",

    /** An interactive component of a graphical user interface (GUI). */
    widget = "widget",

    /** A browser or application window. */
    window = "window",
}

export default enumAriaRoles;
