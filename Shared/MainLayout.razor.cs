using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using System.Net.Http;
using System.Net.Http.Json;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Components.Routing;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.Web.Virtualization;
using Microsoft.AspNetCore.Components.WebAssembly.Http;
using Microsoft.JSInterop;
using CMartCV_Shell;
using CMartCV_Shell.Shared;
using CMartCV_Shell.Shared.Components;
using CMartCV_Shell.Services;

namespace CMartCV_Shell.Shared
{
    public partial class MainLayout
    {
        [Inject] private ITechViewService _techViewService { get; set; }

        private string _pageStyleSheet { get { return _techViewService.IsTechViewShowing ? "tech_view" : "cv_view"; } }

        protected override void OnInitialized()
        {
            _techViewService.TechViewShowingChanged += TechViewShowingChanged;
        }

        private void TechViewShowingChanged(object sender, EventArgs e)
        {
            StateHasChanged();
        }
    }
}