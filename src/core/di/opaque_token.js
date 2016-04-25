'use strict';"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var lang_1 = require('angular2/src/facade/lang');
/**
 * Creates a token that can be used in a DI Provider.
 *
 * ### Example ([live demo](http://plnkr.co/edit/Ys9ezXpj2Mnoy3Uc8KBp?p=preview))
 *
 * ```typescript
 * var t = new OpaqueToken("value");
 *
 * var injector = Injector.resolveAndCreate([
 *   provide(t, {useValue: "bindingValue"})
 * ]);
 *
 * expect(injector.get(t)).toEqual("bindingValue");
 * ```
 *
 * Using an `OpaqueToken` is preferable to using strings as tokens because of possible collisions
 * caused by multiple providers using the same string as two different tokens.
 *
 * Using an `OpaqueToken` is preferable to using an `Object` as tokens because it provides better
 * error messages.
 */
var OpaqueToken = (function () {
    function OpaqueToken(_desc) {
        this._desc = _desc;
    }
    OpaqueToken.prototype.toString = function () { return "Token " + this._desc; };
    OpaqueToken = __decorate([
        lang_1.CONST(), 
        __metadata('design:paramtypes', [String])
    ], OpaqueToken);
    return OpaqueToken;
}());
exports.OpaqueToken = OpaqueToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BhcXVlX3Rva2VuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC1FQ0ZCbklmQy50bXAvYW5ndWxhcjIvc3JjL2NvcmUvZGkvb3BhcXVlX3Rva2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBb0IsMEJBQTBCLENBQUMsQ0FBQTtBQUUvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFFSDtJQUNFLHFCQUFvQixLQUFhO1FBQWIsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUFHLENBQUM7SUFFckMsOEJBQVEsR0FBUixjQUFxQixNQUFNLENBQUMsV0FBUyxJQUFJLENBQUMsS0FBTyxDQUFDLENBQUMsQ0FBQztJQUp0RDtRQUFDLFlBQUssRUFBRTs7bUJBQUE7SUFLUixrQkFBQztBQUFELENBQUMsQUFKRCxJQUlDO0FBSlksbUJBQVcsY0FJdkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q09OU1R9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRva2VuIHRoYXQgY2FuIGJlIHVzZWQgaW4gYSBESSBQcm92aWRlci5cbiAqXG4gKiAjIyMgRXhhbXBsZSAoW2xpdmUgZGVtb10oaHR0cDovL3BsbmtyLmNvL2VkaXQvWXM5ZXpYcGoyTW5veTNVYzhLQnA/cD1wcmV2aWV3KSlcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiB2YXIgdCA9IG5ldyBPcGFxdWVUb2tlbihcInZhbHVlXCIpO1xuICpcbiAqIHZhciBpbmplY3RvciA9IEluamVjdG9yLnJlc29sdmVBbmRDcmVhdGUoW1xuICogICBwcm92aWRlKHQsIHt1c2VWYWx1ZTogXCJiaW5kaW5nVmFsdWVcIn0pXG4gKiBdKTtcbiAqXG4gKiBleHBlY3QoaW5qZWN0b3IuZ2V0KHQpKS50b0VxdWFsKFwiYmluZGluZ1ZhbHVlXCIpO1xuICogYGBgXG4gKlxuICogVXNpbmcgYW4gYE9wYXF1ZVRva2VuYCBpcyBwcmVmZXJhYmxlIHRvIHVzaW5nIHN0cmluZ3MgYXMgdG9rZW5zIGJlY2F1c2Ugb2YgcG9zc2libGUgY29sbGlzaW9uc1xuICogY2F1c2VkIGJ5IG11bHRpcGxlIHByb3ZpZGVycyB1c2luZyB0aGUgc2FtZSBzdHJpbmcgYXMgdHdvIGRpZmZlcmVudCB0b2tlbnMuXG4gKlxuICogVXNpbmcgYW4gYE9wYXF1ZVRva2VuYCBpcyBwcmVmZXJhYmxlIHRvIHVzaW5nIGFuIGBPYmplY3RgIGFzIHRva2VucyBiZWNhdXNlIGl0IHByb3ZpZGVzIGJldHRlclxuICogZXJyb3IgbWVzc2FnZXMuXG4gKi9cbkBDT05TVCgpXG5leHBvcnQgY2xhc3MgT3BhcXVlVG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kZXNjOiBzdHJpbmcpIHt9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHsgcmV0dXJuIGBUb2tlbiAke3RoaXMuX2Rlc2N9YDsgfVxufVxuIl19