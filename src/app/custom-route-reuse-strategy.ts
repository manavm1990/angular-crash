import {
  ActivatedRouteSnapshot,
  DetachedRouteHandle,
  RouteReuseStrategy,
} from '@angular/router';

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  private stored = new Map<string, DetachedRouteHandle>();

  // Should route be detached for reuse?
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    // All routes should be detached (all start with 'courses')
    return true;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    console.log(route.params.id);
    const path = route.routeConfig?.path;
    if (path) {
      this.stored.set(path + (route.params.id || ''), handle);
    }
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const path = route.routeConfig?.path;

    // If we already have a stored route, reuse it
    return path ? this.stored.has(path + (route.params.id || '')) : false;
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    const path = route.routeConfig?.path;
    if (path) {
      console.log(
        this.stored.get(path + (route.params.id || '')) || null,
        '👋🏾'
      );
      return this.stored.get(path + (route.params.id || '')) || null;
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
