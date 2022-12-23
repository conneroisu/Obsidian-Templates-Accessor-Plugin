import { addIcon, ItemView, Platform, Plugin, WorkspaceLeaf } from 'obsidian';

// import DiceRoller from "./ui/DIceRoller.svelte";
import ObsidianTemplatesInterface from "./ui/ObsidianTemplatesInterface.svelte";

import { SampleSettingTab } from './SampleSettingTab';

const VIEW_TYPE = "svelte-view";

// Remember to rename these classes and interfaces!

interface TemplatesForObsidianAccessSettings {
    mySetting: string;
}

const DEFAULT_SETTINGS: TemplatesForObsidianAccessSettings = {
    mySetting: 'default'
}


class MySvelteView extends ItemView {
    view: ObsidianTemplatesInterface;
    // view: DiceRoller;

    getViewType(): string {
        return VIEW_TYPE;
    }

    getDisplayText(): string {
        return "Obsidian Templates Accessor Plugin Interface";
    }

    getIcon(): string {
        return "accessor";
    }

    async onOpen(): Promise<void> {

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.view = new ObsidianTemplatesInterface({ target: (this as any).contentEl, props: {} });
    }
}

export default class TemplatesForObsidianAccess extends Plugin {
    private view: MySvelteView;
    settings: TemplatesForObsidianAccessSettings;

    async onload() {
        await this.loadSettings();

        this.registerView(
            VIEW_TYPE,
            (leaf: WorkspaceLeaf) => (this.view = new MySvelteView(leaf))
        );

        this.app.workspace.onLayoutReady(this.onLayoutReady.bind(this));

        addIcon("accessor", '<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="100" height="100" fill="#1E1E1E"/> <g clip-path="url(#clip0_0_1)"> <g filter="url(#filter0_d_0_1)"> <g filter="url(#filter1_d_0_1)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M66.6233 5.25L67.076 5L67.0558 5.25H66.6233ZM53.9562 12.25C58.1778 9.91611 62.3997 7.58262 66.6233 5.25H5.625C3.692 5.25 2.125 6.817 2.125 8.75V40.8333C2.125 42.7663 3.692 44.3333 5.625 44.3333H33.505L38.4337 55.6667H5.625C3.692 55.6667 2.125 57.2337 2.125 59.1667V91.25C2.125 93.183 3.692 94.75 5.625 94.75H49.5C51.433 94.75 53 93.183 53 91.25V78.4565L65.5 82.742V91.25C65.5 93.183 67.067 94.75 69 94.75H93.375C95.308 94.75 96.875 93.183 96.875 91.25V59.1667C96.875 57.2337 95.308 55.6667 93.375 55.6667H76.984L78.8694 44.3333H93.375C95.308 44.3333 96.875 42.7663 96.875 40.8333V8.75C96.875 6.817 95.308 5.25 93.375 5.25H67.6811L67.6422 5.19421L67.6376 5.25H67.0558L66.4896 12.25H53.9562ZM33.6371 37.3333L32 40.8726L33.505 44.3333H45.3905L46.0389 55.6667H38.4337L41.4779 62.6667H9.125V87.75H46V73.065L47.191 75.8037L46.0389 55.6667H46.6166L47.8165 76.6793L53 78.4565V59.1667C53 57.2337 51.433 55.6667 49.5 55.6667H46.6166L45.9694 44.3333H50.0947L65.5 76.3692V82.742L69.1695 84L65.5 76.3692V75.0388L69.7192 83.8124L72.5 78.239V87.75H89.875V62.6667H75.8195L76.984 55.6667H69C67.067 55.6667 65.5 57.2337 65.5 59.1667V75.0388L50.7337 44.3333H78.8694L80.0339 37.3333H89.875V12.25H72.5601L67.6811 5.25H67.6376L67.0694 12.25H66.4896L66.1774 16.1094L45.2259 32.6171L42.5169 18.5748L47.6135 15.7569L53.9562 12.25H9.125V37.3333H33.6371ZM44.99 37.3333L45.3905 44.3333H45.9694L45.5697 37.3333H46.7286L50.0947 44.3333H50.7337L47.3674 37.3333H80.0339L81.9082 26.0667C81.8693 26.0374 66.8868 16.8543 66.4851 16.6082L66.4788 16.6043L66.4802 16.6031H66.4769L66.4788 16.6043L45.3938 33.2293L47.3674 37.3333H46.7286L45.4135 34.5987L45.5697 37.3333H44.99ZM44.99 37.3333H33.6371L42.0396 19.1673L44.7157 33.0187L44.7552 33.2293L44.99 37.3333ZM67.0694 12.25L66.7567 16.1028L81.5593 25.1615L72.5601 12.25H67.0694ZM75.8195 62.6667H72.5V78.239L73.5935 76.0473L75.8195 62.6667ZM46 73.065L41.4779 62.6667H46V73.065Z" fill="white"/> </g> </g> </g> <defs> <filter id="filter0_d_0_1" x="-13" y="-5" width="125" height="118" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="2"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/> </filter> <filter id="filter1_d_0_1" x="-13" y="-5" width="118" height="118" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="2"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/> </filter> <clipPath id="clip0_0_1"> <rect width="100" height="100" fill="white"/> </clipPath> </defs> </svg>')


        // This creates an icon in the left ribbon.
        this.addRibbonIcon('accessor', 'Sample Plugin', (evt: MouseEvent) => this.openMapView());

        // This adds a simple command that can be triggered anywhere
        this.addCommand({
            id: 'open-templates-for-obsidian-accessor-interface',
            name: 'Open Obsidian Templates Accessor Interface',
            callback: () => this.openMapView(),
        });
        // This adds a settings tab so the user can configure various aspects of the plugin
        this.addSettingTab(new SampleSettingTab(this.app, this));
    }

    onLayoutReady(): void {
        if (this.app.workspace.getLeavesOfType(VIEW_TYPE).length) {
            return;
        }
        this.app.workspace.getRightLeaf(false).setViewState({
            type: VIEW_TYPE,
        });
    }

    onunload() {

    }

    async loadSettings() {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }

    async openMapView() {
        const workspace = this.app.workspace;
        workspace.detachLeavesOfType(VIEW_TYPE);
        const leaf = workspace.getLeaf(
            // @ts-ignore
            !Platform.isMobile
        );
        await leaf.setViewState({ type: VIEW_TYPE });
        workspace.revealLeaf(leaf);
    }
}


