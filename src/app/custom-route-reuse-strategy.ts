import {
  ActivatedRouteSnapshot,
  DetachedRouteHandle,
  RouteReuseStrategy,
} from '@angular/router';

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  private stored = new Map<string, DetachedRouteHandle>();

  // Should route be detached for reuse?
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return route.routeConfig?.path === 'courses';
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    const path = route.routeConfig?.path;
    if (path) {
      this.stored.set(path, handle);
    }
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const path = route.routeConfig?.path;

    // If we already have a stored route, reuse it
    return path ? this.stored.has(path) : false;
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    const path = route.routeConfig?.path;
    if (path) {
      return this.stored.get(path) || null;
    }
    return null;
  }

  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    return future.routeConfig?.path === curr.routeConfig?.path;
  }
}
