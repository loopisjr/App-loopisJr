export declare function testActionSheet(type: string, selector: string, rtl?: boolean, afterScreenshotHook?: (..._args: any[]) => Promise<void>, screenshotName?: string): Promise<void>;
export declare function testActionSheetBackdrop(page: any, screenshotName: string, screenShotCompares: any, actionSheet: any): Promise<void>;
export declare function testActionSheetAlert(page: any, screenshotName: string, screenShotCompares: any): Promise<void>;
